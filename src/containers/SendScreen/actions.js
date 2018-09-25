/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';

const PAY_TO_ADDRESS = 'PAY_TO_ADDRESS';
const PAY_TO_ADDRESS_FAILURE = 'PAY_TO_ADDRESS_FAILURE';
const PAY_TO_ADDRESS_SUCCESS = 'PAY_TO_ADDRESS_SUCCESS';

function payToAddress() {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [PAY_TO_ADDRESS, PAY_TO_ADDRESS_SUCCESS, PAY_TO_ADDRESS_FAILURE],
      asyncTask: (state) =>{
        const txOpts = {
          satoshis:0,
          to:'',
          isInstantSend:true
        }
        const {account} = walletLib;
        return account.broadcastTransaction(account.createTransaction(txOpts), txOpts.isInstantSend);
      },
      payload: { data: {'txid':'0x'} }
    });
}

function actions(dispatch: Function): Object {
  return bindActionCreators({ payToAddress }, dispatch);
}

export default actions;
