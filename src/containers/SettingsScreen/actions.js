/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { changeBalanceVisible } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ changeBalanceVisible }, dispatch);
}

export default actions;
