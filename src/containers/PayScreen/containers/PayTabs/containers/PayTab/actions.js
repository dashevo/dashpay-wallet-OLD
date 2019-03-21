/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { createSendPaymentTransaction } from 'state/payments/send/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators({ createSendPaymentTransaction }, dispatch);
}

export default actions;
