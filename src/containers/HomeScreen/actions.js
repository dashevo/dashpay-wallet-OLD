/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { getDeviceLocale } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ getDeviceLocale }, dispatch);
}

export default actions;
