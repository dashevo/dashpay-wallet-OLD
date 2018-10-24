/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { CHANGE_CURRENCY } from './constants';
import { CURRENCY_RATE_RECEIVED } from './constants';

export const changeCurrency = currency => ({
  type: CHANGE_CURRENCY,
  currency,
});

export const getRate = currencyCode => {
  return async dispatch => {
    const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=${currencyCode}`);
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      const json = await response.json();
      dispatch({
        type: CURRENCY_RATE_RECEIVED,
        rate: json[currencyCode],
      });
    }
  };
};
