/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { changeAlternativeCurrency, fetchAlternativeCurrencyRateIfNeeded } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators({
    changeAlternativeCurrency,
    fetchAlternativeCurrencyRateIfNeeded,
  }, dispatch);
}

export default actions;
