/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';

const GET_ACCOUNT_USUSED_ADDRESS = 'GET_ACCOUNT_USUSED_ADDRESS';

function getAccountUnusedAddress() {
  return (dispatch, getState, walletLib) =>
    dispatch({
      type: GET_ACCOUNT_USUSED_ADDRESS,
      payload: { data: walletLib.account.getUnusedAddress() }
    });
}

function actions(dispatch: Function): Object {
  return bindActionCreators({ getAccountUnusedAddress }, dispatch);
}

export default actions;
