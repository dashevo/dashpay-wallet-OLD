/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { getTransactionHistory } from 'state'
import { approveContactRequest } from 'state'

function actions(dispatch: Function): Object {
  return bindActionCreators({
    getTransactionHistory,
    approveContactRequest,
  }, dispatch);
}

export default actions;
