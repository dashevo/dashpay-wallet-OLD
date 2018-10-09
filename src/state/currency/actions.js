/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { CHANGE_CURRENCY } from './constants';

export const changeCurrency = currency => ({
  type: CHANGE_CURRENCY,
  currency
});
