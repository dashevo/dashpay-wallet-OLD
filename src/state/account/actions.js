/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
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
        try {
          return walletLib.account.forceRefreshAccount();
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
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
        try {
          return walletLib.account.updateNetwork(networkName);
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
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
        try {
          return walletLib.account.getUnusedAddress(type);
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
