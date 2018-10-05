/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { combineReducers } from 'redux';
import language from './language';
import user from './user';

export default combineReducers({
  language,
  user
});
