/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
export { default as COLORS } from './colors';
export { default as THEMES } from './theming';
export { default as LENGTHS } from './lengths';
export { default as ALTERNATIVE_CURRENCIES } from './alternativeCurrencies';

export * from './defaults';

// TMP
export const CURRENCIES = {
  DASH: { code: 'DASH', name: 'DASH' },
  USD: { code: 'USD', name: 'US Dollar' }
};
