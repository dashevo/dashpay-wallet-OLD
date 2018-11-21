/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { getUnusedAddress } from 'state';

function actions(dispatch: Function): Object {
  console.log(getUnusedAddress);
  return bindActionCreators({ getUnusedAddress }, dispatch);
}

export default actions;
