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

const getSparkRate = async currencyCode => {
  const response = await fetch(`https://api.get-spark.com/${currencyCode}`);
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json[currencyCode];
  }
};

const getCryptoCompareRate = async currencyCode => {
  const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=${currencyCode}`);
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json[currencyCode];
  }
};

const getCasaVesRate = async () => {
  const response = await fetch('https://dash.casa/api/?cur=VES');
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json.dashrate;
  }
};

const fallbackStrategy = async currencyCode => {
  switch(currencyCode) {
    case 'VES':
      return await getCasaVesRate();
    default:
      return await getCryptoCompareRate(currencyCode);
  }
};

export const getRate = currencyCode => {
  return async dispatch => {
    let rate;
    try {
      rate = await getSparkRate(currencyCode);
    } catch(error) {
      rate = await fallbackStrategy(currencyCode);
    }
    dispatch({
      type: CURRENCY_RATE_RECEIVED,
      rate,
    });
  };
};
