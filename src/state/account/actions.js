/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { Wallet } from '@dashevo/wallet-lib';
import * as ActionsTypes from "./constants";

/**
 * Will set all data to be rechecked again forcing syncWorker to rescan all tx and addr.
 * @return Promise<bool>
 */
export const forceRefreshAccount = () =>{
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.CHANGE_NETWORK_REQUEST,
        ActionsTypes.CHANGE_NETWORK_SUCCESS,
        ActionsTypes.CHANGE_NETWORK_FAILURE,
      ],
      async asyncTask(state) {
        return walletLib.account.forceRefreshAccount();
      }
    });
};
/**
 * Will switch the current network of the active account.
 * @param networkName - default : testnet
 * @return Promise<bool>
 */
export const changeNetwork = (networkName) =>{
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.CHANGE_NETWORK_REQUEST,
        ActionsTypes.CHANGE_NETWORK_SUCCESS,
        ActionsTypes.CHANGE_NETWORK_FAILURE,
      ],
      async asyncTask(state) {
        return walletLib.account.updateNetwork(networkName);
      }
    });
};

export const register = (username) => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.REGISTER_USERNAME_REQUEST,
        ActionsTypes.REGISTER_USERNAME_SUCCESS,
        ActionsTypes.REGISTER_USERNAME_FAILURE,
      ],
      async asyncTask(state) {
        const dashPayDap = walletLib.account.getDAP('dashpaydap');
        return dashPayDap.registerBUser(username);
      }
    });
};

/**
 * Will get a new unused address to get payments
 * @param type - enum - The type of address we are looking (internal, misc..), default : external.
 * @return Promise<string> - txid
 */
export const getUnusedAddress = (type='external') => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.GET_UNUSED_ADDRESS_REQUEST,
        ActionsTypes.GET_UNUSED_ADDRESS_SUCCESS,
        ActionsTypes.GET_UNUSED_ADDRESS_FAILURE,
      ],
      async asyncTask(state) {
        return walletLib.account.getUnusedAddress(type);
      }
    });
};

export const createAccount = () => {
  return (dispatch, getState, walletLib) => {
    const state = getState();
    const { network, transport } = state.account;
    const wallet = new Wallet({
      network,
      transport,
    });
    mnemonic = wallet.exportWallet()
    dispatch({
      type: ActionsTypes.ACCOUNT_CREATED,
      mnemonic,
    })
  };
};

export const setMnemonic = (mnemonic) => ({
  type: ActionsTypes.SET_MNEMONIC,
  mnemonic,
});

export const setUsername = (username) => ({
  type: ActionsTypes.SET_USERNAME,
  username,
});
