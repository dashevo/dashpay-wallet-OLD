/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { combineReducers } from 'redux';
import settings from './settings';
import payment from './payment';
import alternativeCurrency from './alternativeCurrency';
import language from './language';
import user from './user';
import transactions from './transactions';

export default combineReducers({
  transactions,
  settings,
  payment,
  alternativeCurrency,
  language,
  user,
});
