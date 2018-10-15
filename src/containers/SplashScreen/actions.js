/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from "redux";
import { initializeWallet } from "state";

function actions(dispatch: Function): Object {
  return bindActionCreators({ initializeWallet }, dispatch);
}

export default actions;
