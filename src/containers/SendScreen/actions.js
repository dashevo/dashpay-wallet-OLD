/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { createTransaction, broadcastTransaction } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ createTransaction, broadcastTransaction }, dispatch);
}

export default actions;
