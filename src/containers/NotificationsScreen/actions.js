/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { getTransactionHistory } from 'state'

function actions(dispatch: Function): Object {
  return bindActionCreators({ getTransactionHistory }, dispatch);
}

export default actions;