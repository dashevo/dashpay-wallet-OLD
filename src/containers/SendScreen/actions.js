/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';

function actions(dispatch: Function): Object {
  return bindActionCreators({  }, dispatch);
}

export default actions;
