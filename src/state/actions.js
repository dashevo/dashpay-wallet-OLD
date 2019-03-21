/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
export const INITIALIZE_WALLET_REQUEST = 'INITIALIZE_WALLET_REQUEST';
export const INITIALIZE_WALLET_SUCCESS = 'INITIALIZE_WALLET_SUCCESS';
export const INITIALIZE_WALLET_FAILURE = 'INITIALIZE_WALLET_FAILURE';

const DUFFS_PER_DASH = 100000000;
function duffsToDash(duffs) {
  if (duffs === undefined || duffs.constructor.name !== 'Number') {
    throw new Error('Can only convert a number');
  }
  return duffs / DUFFS_PER_DASH;
}

export const initializeWallet = () => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        INITIALIZE_WALLET_REQUEST,
        INITIALIZE_WALLET_SUCCESS,
        INITIALIZE_WALLET_FAILURE
      ],
      async asyncTask(state) {
        const { mnemonic, network, transport } = state.account;
        try {
          await walletLib.initializeWallet({
            mnemonic,
            network,
            transport
          });

          const balance = walletLib.account.getBalance();
          return dispatch({
            type: 'RECEIVE_BALANCE',
            response: balance
          });
        } catch (err) {
          const { message = 'Something went wrong.' } = err;
          throw new Error(message);
        }
      }
    });
};

// TMP
function e() {}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

import { random } from 'lodash';

export function getInitialState(progress = e) {
  return function(dispatch, getState, walletLib) {
    return dispatch({
      types: [
        'GET_INITIAL_STATE_REQUEST',
        'GET_INITIAL_STATE_SUCCESS',
        'GET_INITIAL_STATE_FAILURE'
      ],
      async asyncTask(state) {
        try {
          let count = 0;
          const promises = [
            wait(random(250, 2500)),
            wait(random(250, 2500)),
            wait(random(250, 2500)),
            wait(random(250, 2500)),
            wait(random(250, 2500)),
            wait(random(250, 2500)),
            wait(random(250, 2500)),
            wait(random(250, 2500)),
            wait(random(250, 2500)),
            dispatch(initializeWallet())
          ];
          progress(0);
          promises.forEach(promise => {
            promise.then(() => {
              count++;
              progress((count * 100) / promises.length);
            });
          });
          return Promise.all(promises);
        } catch (err) {
          const { message = 'Something went wrong.' } = err;
          throw new Error(message);
        }
      }
    });
  };
}
