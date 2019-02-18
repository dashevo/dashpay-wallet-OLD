/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { getUnusedAddress } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ getUnusedAddress }, dispatch);
}

export default actions;
