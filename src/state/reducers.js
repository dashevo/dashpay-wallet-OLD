// External dependencies
import { combineReducers } from 'redux';

// Internal dependencies
import account from './account/reducer';
import alternativeCurrency from './alternativeCurrency/reducer';
import language from './language/reducer';
import payment from './payment/reducer';
import payments from './payments/reducer';
import profiles from './profiles/reducer';
import settings from './settings/reducer';
import transactions from './transactions/reducer';
import user from './user/reducer';

export default combineReducers({
  account,
  alternativeCurrency,
  language,
  payment,
  payments,
  profiles,
  settings,
  transactions,
  user,
});
