/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { FIAT_CURRENCIES } from 'constants';

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const CURRENCY_RATE_RECEIVED = 'CURRENCY_RATE_RECEIVED';

export const DEFAULT_CURRENCY = FIAT_CURRENCIES.find(({ code }) => code === 'USD');
