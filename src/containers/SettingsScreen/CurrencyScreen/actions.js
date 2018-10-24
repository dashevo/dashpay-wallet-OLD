/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { changeCurrency, getRate } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({ changeCurrency, getRate }, dispatch);
}

export default actions;
