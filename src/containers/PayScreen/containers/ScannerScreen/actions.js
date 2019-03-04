/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { transactionRecipientScanned } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ transactionRecipientScanned }, dispatch);
}

export default actions;