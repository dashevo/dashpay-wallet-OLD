/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import language from './language';
export * from './language';

const rootReducer = combineReducers({
  language
});

export default createStore(rootReducer);
