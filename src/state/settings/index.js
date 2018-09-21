/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { createSelector } from 'reselect';

const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
const initialState = {
  locale: 'en',
  currency: 'USD',
  balanceVisible: true
};

type state = {
  locale?: string,
  currency?: string,
  balanceVisible?: boolean
};
type settingsAction = {
  type: string,
  state: settingsType
}

export const settingsReducer = (state = initialState, action: settingsAction) => {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return {...state, ...action.settings};
    default:
      return state;
  }
};
export const selectSettings = state => state.settings;
export const changeSettings = (settings: settingsType) => ({
  type: CHANGE_SETTINGS,
  settings: settings
});

export const selectCurrency = createSelector(
  selectSettings, settings => settings.currency
);
export const selectLocale = createSelector(
  selectSettings, settings => settings.locale
);
export const selectBalanceVisible = createSelector(
  selectSettings, settings => settings.balanceVisible
);
