/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { combineReducers } from 'redux';
import camera from './camera';
import cameraRoll from './cameraRoll';
import account from './account';
import settings from './settings';
import payment from './payment';
import alternativeCurrency from './alternativeCurrency';
import language from './language';
import user from './user';
import transactions from './transactions';
import contacts from './contacts/reducer';
import payments from './payments/reducer';

export default combineReducers({
  camera,
  cameraRoll,
  account,
  transactions,
  settings,
  payment,
  alternativeCurrency,
  language,
  user,
  contacts,
  payments
});
