/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { settingsReducer } from './settings';

const rootReducer = combineReducers({
  settings: settingsReducer
});

export default createStore(rootReducer);
export * from './settings';
