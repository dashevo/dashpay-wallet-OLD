/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { initializeWallet } from 'state';
import { getUnusedAddress } from 'state';
import { fetchAlternativeCurrencyRateIfNeeded } from 'state';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    {
      initializeWallet,
      getUnusedAddress,
      fetchAlternativeCurrencyRateIfNeeded
    },
    dispatch
  );
}

export default actions;
