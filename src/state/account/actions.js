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
      async asyncTask() {
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
      async asyncTask() {
        return walletLib.account.updateNetwork(networkName);
      }
    });
};

export const register = (username: string) => (dispatch, getState, walletLib) => dispatch({
  username,
  types: [
    ActionsTypes.REGISTER_USERNAME_REQUEST,
    ActionsTypes.REGISTER_USERNAME_SUCCESS,
    ActionsTypes.REGISTER_USERNAME_FAILURE,
  ],
  async asyncTask() {
    const displayName = username;
    const bio = `I am ${displayName}, my bio is pretty awesome`;
    const dashPayDap = walletLib.account.getDAP('dashpaydap');
    const registerProfile = () => dashPayDap
      .registerProfile(`https://api.adorable.io/avatars/285/${username}.png`, bio, displayName, username);
    return dashPayDap.registerBUser(username).then(registerProfile);
  },
});

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
      async asyncTask() {
        return walletLib.account.getUnusedAddress(type);
      }
    });
};

export const createAccount = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { network, transport } = state.account;
    const wallet = new Wallet({
      network,
      transport,
    });
    const mnemonic = wallet.exportWallet()
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
