import { ALTERNATIVE_CURRENCIES } from 'constants';
import {
  CHANGE_ALTERNATIVE_CURRENCY,
  ALTERNATIVE_CURRENCY_RATE_REQUEST,
  ALTERNATIVE_CURRENCY_RATE_SUCCESS,
  ALTERNATIVE_CURRENCY_RATE_FAILURE,
  INVALIDATE_ALTERNATIVE_CURRENCY_RATE,
  ALTERNATIVE_CURRENCY_RATE_LIFESPAN,
} from './constants';

const shouldFetchRate = ({ isFetching, didInvalidate, rateUpdatedAt }) => {
  if (isFetching) {
    return false;
  }
  if (didInvalidate || !rateUpdatedAt) {
    return true;
  }
  return Date.now() - rateUpdatedAt > ALTERNATIVE_CURRENCY_RATE_LIFESPAN;
};

const getSparkRate = async (currencyCode) => {
  const response = await fetch(`https://api.get-spark.com/${currencyCode}`);
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json[currencyCode];
  }
};

const getCryptoCompareRate = async (currencyCode) => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=${currencyCode}`,
  );
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

const fallbackStrategy = async (currencyCode) => {
  switch (currencyCode) {
    case 'VES':
      return getCasaVesRate();
    default:
      return getCryptoCompareRate(currencyCode);
  }
};

export const changeAlternativeCurrency = (code) => {
  const alternativeCurrency = ALTERNATIVE_CURRENCIES.find(
    currency => currency.code === code,
  );
  return {
    type: CHANGE_ALTERNATIVE_CURRENCY,
    ...alternativeCurrency,
  };
};

export const invalidateAlternativeCurrencyRate = () => ({
  type: INVALIDATE_ALTERNATIVE_CURRENCY_RATE,
});

export const fetchAlternativeCurrencyRateIfNeeded = () => (dispatch, getState) => dispatch({
  types: [
    ALTERNATIVE_CURRENCY_RATE_REQUEST,
    ALTERNATIVE_CURRENCY_RATE_SUCCESS,
    ALTERNATIVE_CURRENCY_RATE_FAILURE,
  ],
  async asyncTask() {
    const state = getState().alternativeCurrency;
    const currencyCode = state.code;
    let { rate } = state;
    if (shouldFetchRate(state)) {
      try {
        rate = await getSparkRate(currencyCode);
      } catch (error) {
        rate = await fallbackStrategy(currencyCode);
      }
      return rate;
    }
  },
});
