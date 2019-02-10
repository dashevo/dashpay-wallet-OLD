/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { createTransaction } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ createTransaction }, dispatch);
}

export default actions;
