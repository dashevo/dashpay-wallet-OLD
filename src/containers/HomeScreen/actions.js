// @flow
import { bindActionCreators } from 'redux';
import { initializeWallet } from 'state/actions';
import {
  invalidateAlternativeCurrencyRate,
  fetchAlternativeCurrencyRateIfNeeded,
} from 'state/alternativeCurrency/actions';
import { getByBUsername } from 'state/profiles/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    {
      initializeWallet,
      invalidateAlternativeCurrencyRate,
      fetchAlternativeCurrencyRateIfNeeded,
      getByBUsername,
    },
    dispatch,
  );
}

export default actions;
