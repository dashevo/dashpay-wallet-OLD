/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { getInitialState } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ getInitialState: () => {} }, dispatch);
}

export default actions;
