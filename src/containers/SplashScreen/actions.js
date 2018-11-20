/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from "redux";
import { initializeWallet } from "state";
import { fetchAlternativeCurrencyRateIfNeeded } from "state";

function actions(dispatch: Function): Object {
  return bindActionCreators(
    { initializeWallet, fetchAlternativeCurrencyRateIfNeeded },
    dispatch
  );
}

export default actions;
