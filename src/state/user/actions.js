import * as ActionsTypes from "./constants";

/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
export const createTransaction = (opts) => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.GET_USER_STATE_REQUEST,
        ActionsTypes.GET_USER_STATE_SUCCESS,
        ActionsTypes.GET_USER_STATE_FAILURE,
      ],
      async asyncTask(state) {
        try {
          if(!opts.recipient || !opts.satoshis){
            return walletLib.account.createTransaction(opts);
          }
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
export const broadcastTransaction = (opts) => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.GET_USER_STATE_REQUEST,
        ActionsTypes.GET_USER_STATE_SUCCESS,
        ActionsTypes.GET_USER_STATE_FAILURE,
      ],
      async asyncTask(state) {
        try {
          if(!opts.recipient || !opts.satoshis){
            return walletLib.account.broadcastTransaction(opts);
          }
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};

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
          console.log('getUnusedADDRESS, WALLETLIB',walletLib);
          return walletLib.account.getUnusedAddress(type);
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
