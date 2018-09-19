/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import language from './settings/language';
import currency from './settings/currency';
export * from './settings/language';
export * from './settings/currency';

const rootReducer = combineReducers({
  settings: combineReducers({
    currency: currency,
    language: language
  })
});

export default createStore(rootReducer);
