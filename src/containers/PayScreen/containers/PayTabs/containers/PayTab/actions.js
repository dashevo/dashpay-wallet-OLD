/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { createPaymentTransaction } from 'state/transactions/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators({ createPaymentTransaction }, dispatch);
}

export default actions;
