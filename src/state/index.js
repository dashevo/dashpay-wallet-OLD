/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import language from './settings/language';
export * from './settings/language';

const rootReducer = combineReducers({
  settings: combineReducers({
    language: language
  })
});

export default createStore(rootReducer);
