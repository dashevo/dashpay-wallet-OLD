/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createStore } from "redux";
import reducer from "./reducer";
import SecureStorage from 'react-native-secure-storage';
// Tmp
export * from "./transactions";
export * from "./actions";
export * from "./settings";
export * from "./language";
export * from "./payment";
export * from "./currency";
export * from "./user";
export * from "./rates";

// Tmp
const walletLib = {
  wallet: null,
  account: null,
  initializeWallet(opts) {
    const { network, mnemonic } = opts;
    return new Promise(resolve => {
      try {
        walletLib.wallet = new Wallet({
          network,
          mnemonic,
          adapter:SecureStorage,
          transport: "insight",
          injectDefaultPlugins: true
        });
      }
      catch (e) {
        console.log('Error on init',e);
        throw e;
      }
      walletLib.account = this.wallet.getAccount();

      walletLib.account.events.on("ready", () => {
        let b = walletLib.account.getBalance();
        console.log('Balance is :', b)
        resolve(true);
      });
    });
  },
  forceRefreshAccount(){
    return new Promise(resolve => {
      resolve(walletLib.account.forceRefreshAccount())
    })
  }
};

import thunk from "redux-thunk";
import middleware from "./middleware";
import { applyMiddleware } from "redux";
import { Wallet } from "@dashevo/wallet-lib";

const extraArgument = thunk.withExtraArgument(walletLib);
const enhancedMiddleware = applyMiddleware(middleware, extraArgument);
export default createStore(reducer, enhancedMiddleware);
