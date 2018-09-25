/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { Wallet } from '@dashevo/wallet-lib';

const INITIALIZE_WALLET = 'INITIALIZE_WALLET';
const INITIALIZE_WALLET_SUCCESS = 'INITIALIZE_WALLET_SUCCESS';
const INITIALIZE_WALLET_FAILURE = 'INITIALIZE_WALLET_FAILURE';

const GET_ACCOUNT_UNUSED_ADDR = 'GET_ACCOUNT_UNUSED_ADDR';

function initializeWallet() {
  return (dispatch, getState, wallet) =>
    dispatch({
      types: [INITIALIZE_WALLET, INITIALIZE_WALLET_SUCCESS, INITIALIZE_WALLET_FAILURE],
      asyncTask: state => {
        const {network, mnemonic} = state.user;
        const opts = {
          network,
          mnemonic
        }
        return wallet.initializeWallet(opts)
      },
      payload: { data: {done:true} }
    });
}

function getUnusedAddress() {
  return (dispatch, getState, walletLib) =>
    dispatch({
      type: GET_ACCOUNT_UNUSED_ADDR,
      payload: { data: walletLib.account.getUnusedAddress() }
    });
}

function actions(dispatch: Function): Object {
  return bindActionCreators({ initializeWallet, getUnusedAddress }, dispatch);
}

export default actions;
