// @flow
import { combineReducers } from 'redux';
import camera from './camera';
import cameraRoll from './cameraRoll';
import account from './account';
import settings from './settings';
import payment from './payment';
import alternativeCurrency from './alternativeCurrency/reducer';
import language from './language';
import transactions from './transactions';
import contacts from './contacts/reducer';
import payments from './payments/reducer';
import profiles from './profiles/reducer';

export default combineReducers({
  camera,
  cameraRoll,
  account,
  transactions,
  settings,
  payment,
  alternativeCurrency,
  language,
  contacts,
  payments,
  profiles,
});
