/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { Wallet } from '@dashevo/wallet-lib';

const CHANGE_LOCALE = 'CHANGE_LOCALE';
const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
const CHANGE_NETWORK = 'CHANGE_NETWORK';
const CHANGE_BALANCE_VISIBILITY = 'CHANGE_BALANCE_VISIBILITY';

function changeLocale() {
  return (dispatch, getState, walletLib) =>
    dispatch({
      type: CHANGE_LOCALE,
      payload: { data: {locale:translation} }
    });
}

function changeCurrency(currency) {
  return (dispatch, getState, walletLib) =>
    dispatch({
      type: CHANGE_CURRENCY,
      payload: { data: {currency:currency} }
    });
}

function changeBalanceVisibility(balanceVisible) {
  return (dispatch, getState, walletLib) =>
    dispatch({
      type: CHANGE_BALANCE_VISIBILITY,
      payload: { data: {balanceVisible:balanceVisible} }
    });
}

function changeNetwork(network) {
  return (dispatch, getState, walletLib) =>
    dispatch({
      type: CHANGE_NETWORK,
      asyncTask: (state) => walletLib.account.updateNetwork(network),
      payload: { data: {network:network} }
    });
}

function actions(dispatch: Function): Object {
  return bindActionCreators({ changeLocale, changeCurrency, changeBalanceVisibility, changeNetwork }, dispatch);
}

export default actions;
