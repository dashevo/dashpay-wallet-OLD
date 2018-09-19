/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import locale from './settings/locale';
import currency from './settings/currency';
export * from './settings/locale';
export * from './settings/currency';

const rootReducer = combineReducers({
  settings: combineReducers({
    currency: currency,
    locale: locale
  })
});

export default createStore(rootReducer);
