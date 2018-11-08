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

const getCryptoCompareRate = async currencyCode => {
  const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=${currencyCode}`);
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json[currencyCode];
  }
};

const getVesRate = async () => {
  const response = await fetch('https://dash.casa/api/?cur=VES');
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json.dashrate;
  }
};

export const getRate = currencyCode => {
  return async dispatch => {
    let rate;
    switch(currencyCode) {
      case 'VES':
        rate = await getVesRate();
        break;
      default:
        rate = await getCryptoCompareRate(currencyCode);
    }
    dispatch({
      type: CURRENCY_RATE_RECEIVED,
      rate,
    });
  };
};
