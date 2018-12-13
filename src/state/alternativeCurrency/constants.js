/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { ALTERNATIVE_CURRENCIES } from 'constants';
export const CHANGE_ALTERNATIVE_CURRENCY = 'CHANGE_ALTERNATIVE_CURRENCY';
export const INVALIDATE_ALTERNATIVE_CURRENCY_RATE = 'INVALIDATE_ALTERNATIVE_CURRENCY_RATE';
export const ALTERNATIVE_CURRENCY_RATE_REQUEST = 'ALTERNATIVE_CURRENCY_RATE_REQUEST';
export const ALTERNATIVE_CURRENCY_RATE_RECEIVED = 'ALTERNATIVE_CURRENCY_RATE_RECEIVED';
const usdCurrency = ALTERNATIVE_CURRENCIES.find(({ code }) => code === 'USD');
export const DEFAULT_ALTERNATIVE_CURRENCY = {
  ...usdCurrency,
  didInvalidate: true,
  isFetching: false,
};
export const ALTERNATIVE_CURRENCY_RATE_LIFESPAN = 300000;