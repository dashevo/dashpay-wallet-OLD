/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createStore } from 'redux';
import reducers from './reducers';

// Tmp
export * from './language';

// Tmp
const walletLib = {
  wallet:null,
  account:null,
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
        
      })
    });
  }
};

import thunk from 'redux-thunk';
import middleware from './middleware';
import { applyMiddleware } from 'redux';
import {Wallet} from "@dashevo/wallet-lib";

const extraArgument = thunk.withExtraArgument(walletLib);
const enhancedMiddleware = applyMiddleware(middleware, extraArgument);
export default createStore(reducers, enhancedMiddleware);
