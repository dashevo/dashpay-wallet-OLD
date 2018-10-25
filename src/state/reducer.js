/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { combineReducers } from 'redux';
import settings from './settings';
import payment from './payment';
import rates from './rates';
import currency from './currency';
import language from './language';
import user from './user';
import transactions from './transactions';

export default combineReducers({
  transactions,
  settings,
  payment,
  currency,
  language,
  user,
  rates
});
