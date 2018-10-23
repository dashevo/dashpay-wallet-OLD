/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { combineReducers } from 'redux';
import settings from './settings';
import payment from './payment';
import currency from './currency';
import language from './language';
import user from './user';

export default combineReducers({
  settings,
  payment,
  currency,
  language,
  user
});
