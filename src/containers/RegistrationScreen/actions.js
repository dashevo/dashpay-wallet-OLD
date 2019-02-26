/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { register } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ register }, dispatch);
}

export default actions;
