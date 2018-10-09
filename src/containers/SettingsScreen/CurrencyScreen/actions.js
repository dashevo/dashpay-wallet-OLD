/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { changeCurrency } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ changeCurrency }, dispatch);
}

export default actions;
