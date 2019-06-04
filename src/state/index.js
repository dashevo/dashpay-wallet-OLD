/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { Wallet } from '@dashevo/wallet-lib';
import DAPIClient from '@dashevo/dapi-client';
import DashPayDAP from '@dashevo/dashpay-dap';
import reducer from './reducer';
import middleware from './middleware';

export * from './contacts';
export * from './transactions';
export * from './actions';
export * from './settings';
export * from './language';
export * from './payment';
export * from './account';

//
// // Tmp
const transport = new DAPIClient({
  seeds: [{ service: '18.237.69.61:3000' }],
  timeout: 20000,
  retries: 5,
});

const walletLib = {
  wallet: null,
  account: null,
  initializeWallet(opts) {
    const { mnemonic, username, network } = opts;
    const accountId = opts.accountId || 0;

    return new Promise((resolve) => {
      const dpd = new DashPayDAP({ username });

      walletLib.wallet = new Wallet({
        network,
        mnemonic,
        plugins: [dpd],
        allowSensitiveOperations: true,
        transport,
      });

      walletLib.account = walletLib.wallet.getAccount({ index: accountId });
      walletLib.account.events.on('ready', () => {
        resolve(true);
      });
    });
  },
};

// the following code should be splitted into two files:
// configureStore.prod.js should be without createLogger.
const extraArgument = thunk.withExtraArgument(walletLib);
const enhancedMiddleware = applyMiddleware(
  middleware,
  extraArgument,
);
let composeEnhancers = compose;
// eslint-disable-next-line no-undef,no-underscore-dangle
if (__DEV__ && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
// eslint-disable-next-line no-undef,no-underscore-dangle
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
const enhancer = composeEnhancers(enhancedMiddleware);
const store = createStore(reducer, enhancer);
export default store;
