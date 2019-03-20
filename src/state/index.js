/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

export * from './contacts';
export * from './transactions';
export * from './actions';
export * from './settings';
export * from './language';
export * from './payment';
export * from './alternativeCurrency';
export * from './user';
export * from './account';

import thunk from 'redux-thunk';
import middleware from './middleware';
import { applyMiddleware } from 'redux';

import { Wallet } from '@dashevo/wallet-lib';
import DAPIClient from '@dashevo/dapi-client';
import DashPayDAP from '@dashevo/dashpay-dap';

//
// // Tmp
const transport = new DAPIClient({
  seeds: [{ ip: '54.187.113.35', port: 3000 }],
  timeout: 20000,
  retries: 5
});

const walletLib = {
  wallet: null,
  account: null,
  initializeWallet(opts) {
    const username = 'DashPayTeam';
    const network = 'testnet';
    const mnemonic =
      'light point battle foam find motion true because genre people banana fit';
    const accountId = opts.accountId || 0;

    return new Promise((resolve, reject) => {
      try {
        const dpd = new DashPayDAP({ username });

        walletLib.wallet = new Wallet({
          network,
          mnemonic,
          plugins: [dpd],
          allowSensitiveOperations: true,
          transport
        });

        walletLib.account = walletLib.wallet.getAccount({ index: accountId });
        let listener = walletLib.account.events.on('ready', () => {
          resolve(true);
        });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
};

// the following code should be splitted into two files:
// configureStore.prod.js should be without createLogger.
const extraArgument = thunk.withExtraArgument(walletLib);
const enhancedMiddleware = applyMiddleware(
  middleware,
  extraArgument,
);
let composeEnhancers = compose;
if (__DEV__ && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
const enhancer = composeEnhancers(enhancedMiddleware);
const store = createStore(reducer, enhancer);
export default store;
