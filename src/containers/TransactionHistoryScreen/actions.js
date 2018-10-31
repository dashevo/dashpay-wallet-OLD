/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { getTransactions } from 'state'

function actions(dispatch: Function): Object {
  return bindActionCreators({ getTransactions }, dispatch);
}

export default actions;
