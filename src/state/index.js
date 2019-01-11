/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createStore, compose } from 'redux';
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
import DashPayDAP from '@dashevo/wallet-lib/examples/daps/DashPayDAP';
import InMem from '@dashevo/wallet-lib/src/adapters/InMem';

//
// // Tmp
const DAPIClient = require('@dashevo/dapi-client');
const transport = new DAPIClient({
  seeds: [{ ip: '52.39.47.232', port: 3000 }]
});

const walletLib = {
  wallet: null,
  account: null,
  initializeWallet(opts) {
    const { network, mnemonic } = opts;
    const accountId = opts.accountId || 0;
    return new Promise(resolve => {
      try {
        walletLib.wallet = new Wallet({
          network,
          mnemonic,
          plugins: [DashPayDAP],
          adapter: new InMem(),
          allowSensitiveOperations: true,
          transport
        });
        walletLib.account = walletLib.wallet.getAccount(accountId);
        let listener = walletLib.account.events.on('ready', () => {
          resolve(true);
        });
      } catch (e) {
        resolve(e);
      }
    });
  }
};

const extraArgument = thunk.withExtraArgument(walletLib);
const store = createStore(reducer, applyMiddleware(middleware, extraArgument));
export default store;
