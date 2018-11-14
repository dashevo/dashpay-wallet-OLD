/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

// Tmp
export * from './transactions';
export * from './actions';
export * from './settings';
export * from './language';
export * from './payment';
export * from './currency';
export * from './user';
export * from './rates';

// Tmp
const walletLib = {
  wallet: null,
  account: null,
  initializeWallet(opts) {
    const { network, mnemonic } = opts;
    return new Promise(resolve => {
      walletLib.wallet = new Wallet({
        network,
        mnemonic
      });
      walletLib.account = this.wallet.getAccount(0);
      let listener = walletLib.account.events.on('ready', () => {
        resolve(true);
      });
    });
  }
};

import thunk from 'redux-thunk';
import middleware from './middleware';
import { applyMiddleware } from 'redux';
import { Wallet } from '@dashevo/wallet-lib';

// the following code should be splitted into two files:
// configureStore.prod.js should be without createLogger.
const extraArgument = thunk.withExtraArgument(walletLib);
const enhancedMiddleware = applyMiddleware(
  middleware,
  extraArgument,
  createLogger()
);

export default createStore(reducer, enhancedMiddleware);
