import { bindActionCreators } from 'redux';
import { fetchAlternativeCurrencyRateIfNeeded } from 'state/alternativeCurrency/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators({ fetchAlternativeCurrencyRateIfNeeded }, dispatch);
}

export default actions;
