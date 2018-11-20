/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { CHANGE_ALTERNATIVE_CURRENCY } from './constants';
import { ALTERNATIVE_CURRENCY_RATE_RECEIVED } from './constants';
import { INVALIDATE_ALTERNATIVE_CURRENCY_RATE } from './constants';
import { ALTERNATIVE_CURRENCY_RATE_LIFESPAN } from './constants';

const shouldFetchRate = ({ isFetching, didInvalidate, rateUpdatedAt }) => {
  if (isFetching) {
    return false;
  }
  if (didInvalidate || !rateUpdatedAt) {
    return true;
  }
  return Date.now() - rateUpdatedAt > ALTERNATIVE_CURRENCY_RATE_LIFESPAN;
};

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

export const changeAlternativeCurrency = ({ code, name }) => ({
  type: CHANGE_ALTERNATIVE_CURRENCY,
  code,
  name,
});

export const invalidateAlternativeCurrencyRate = () => ({
  type: INVALIDATE_ALTERNATIVE_CURRENCY_RATE,
});

export const fetchAlternativeCurrencyRateIfNeeded = () => async (dispatch, getState) => {
  const state = getState().alternativeCurrency;
  const currencyCode = state.code;
  if (shouldFetchRate(state)) {
    let rate;
    try {
      rate = await getSparkRate(currencyCode);
    } catch(error) {
      rate = await fallbackStrategy(currencyCode);
    }
    dispatch({
      type: ALTERNATIVE_CURRENCY_RATE_RECEIVED,
      rate,
    });
  }
}
