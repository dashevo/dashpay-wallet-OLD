/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { initializeWallet } from 'state/actions';
import {
  invalidateAlternativeCurrencyRate,
  fetchAlternativeCurrencyRateIfNeeded,
} from 'state/alternativeCurrency/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    {
      initializeWallet,
      invalidateAlternativeCurrencyRate,
      fetchAlternativeCurrencyRateIfNeeded,
    },
    dispatch,
  );
}

export default actions;
