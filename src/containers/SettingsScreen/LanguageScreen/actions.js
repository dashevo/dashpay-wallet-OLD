/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { changeLocale } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ changeLocale }, dispatch);
}

export default actions;
