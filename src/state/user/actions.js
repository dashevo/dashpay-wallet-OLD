import * as ActionsTypes from "./constants";
const DUFFS_PER_DASH = 100000000;

function dashToDuffs(dash) {
  if (dash === undefined || dash.constructor.name !== 'Number') {
    throw new Error(`Can only convert a number ${dash}`);
  }
  return parseInt((dash * DUFFS_PER_DASH).toFixed(0), 10);
}

/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
export const createTransaction = (opts) => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.CREATE_TX_REQUEST,
        ActionsTypes.CREATE_TX_SUCCESS,
        ActionsTypes.CREATE_TX_FAILURE,
      ],
      async asyncTask(state) {
        try {
          if(!opts.recipient) {
            throw new Error('Missing recipient to pay')
          }
          const recipient = opts.recipient;
          const satoshis = opts.satoshis !== undefined ? opts.satoshis : dashToDuffs(parseFloat(opts.amount));
          if(!satoshis) throw new Error('Missing satoshis or amount to pay');
          return walletLib.account.createTransaction({recipient, satoshis});
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
export const broadcastTransaction = (rawtx) => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.BROADCAST_TX_REQUEST,
        ActionsTypes.BROADCAST_TX_SUCCESS,
        ActionsTypes.BROADCAST_TX_FAILURE,
      ],
      async asyncTask(state) {
        try {
          if(rawtx){
            return walletLib.account.broadcastTransaction(rawtx);
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
          return walletLib.account.getUnusedAddress(type);
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
