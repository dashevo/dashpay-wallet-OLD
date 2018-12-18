/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createStore } from "redux";
import reducer from "./reducer";

// Tmp
export * from "./transactions";
export * from "./actions";
export * from "./settings";
export * from "./language";
export * from "./payment";
export * from "./alternativeCurrency";
export * from "./user";
export * from "./account";
export * from "./contacts";
//
// // Tmp
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
          plugins:[DashPayDAP]
        });
        walletLib.account = walletLib.wallet.getAccount(accountId);
        walletLib.account.events.on("ready", () => {
          resolve(true);
        });
      }catch (e) {
        resolve(e);
      }

    });
  }
};

import thunk from "redux-thunk";
import middleware from "./middleware";
import { applyMiddleware } from "redux";
import { Wallet } from "@dashevo/wallet-lib";
import DashPayDAP from "@dashevo/wallet-lib/examples/daps/DashPayDAP";

const extraArgument = thunk.withExtraArgument(walletLib);
const enhancedMiddleware = applyMiddleware(middleware, extraArgument);
export default createStore(reducer, enhancedMiddleware);
