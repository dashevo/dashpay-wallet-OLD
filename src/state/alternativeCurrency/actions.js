import logger from 'utils/logger';
import { ALTERNATIVE_CURRENCIES } from 'constants';
import {
  ALTERNATIVE_CURRENCY_SET_CURRENCY,
  ALTERNATIVE_CURRENCY_GET_RATE_ASYNC,
  ALTERNATIVE_CURRENCY_INVALIDATE_RATE,
} from 'state/action-types';
import { ALTERNATIVE_CURRENCY_RATE_LIFESPAN } from './constants';

class AlternativeCurrencyProviderError extends Error {
  constructor(strategy, message) {
    super(message);
    this.name = 'AlternativeCurrencyProviderError';
    this.strategy = strategy;
  }

  toString() {
    const { name, message, strategy } = this;
    return `${name} (${strategy}): ${message}`;
  }
}

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
    logger.error(new AlternativeCurrencyProviderError('Spark', response.statusText));
    return undefined;
  }
  const json = await response.json();
  return json[currencyCode];
};

const getCryptoCompareRate = async (currencyCode) => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=${currencyCode}`,
  );
  if (!response.ok) {
    logger.error(new AlternativeCurrencyProviderError('CryptoCompare', response.statusText));
    return undefined;
  }
  const json = await response.json();
  return json[currencyCode];
};

const getCasaVesRate = async () => {
  const response = await fetch('https://dash.casa/api/?cur=VES');
  if (!response.ok) {
    logger.error(new AlternativeCurrencyProviderError('Casa', response.statusText));
    return undefined;
  }
  const json = await response.json();
  return json.dashrate;
};

const DEFAULT_STRATEGIES = [
  {
    name: 'Spark',
    getRate: getSparkRate,
  },
  {
    name: 'CryptoCompare',
    getRate: getCryptoCompareRate,
  },
];

const CASA_STRATEGY = {
  name: 'Casa',
  getRate: getCasaVesRate,
};

const getRate = async (code) => {
  const strategies = DEFAULT_STRATEGIES;
  if (code === 'VES') {
    strategies.unshift(CASA_STRATEGY);
  }

  for (let i = 0; i < strategies.length; i += 1) {
    const strategy = strategies[i];
    try {
      /* eslint-disable no-await-in-loop */
      const rate = await strategy.getRate(code);
      /* eslint-enable no-await-in-loop */
      if (rate) {
        return rate;
      }
    } catch (error) {
      logger.log(new AlternativeCurrencyProviderError(strategy.name, error.message));
    }
  }
  return undefined;
};

export const setAlternativeCurrency = (code) => {
  const alternativeCurrency = ALTERNATIVE_CURRENCIES.find(
    currency => currency.code === code,
  );
  return {
    type: ALTERNATIVE_CURRENCY_SET_CURRENCY,
    ...alternativeCurrency,
  };
};

export const invalidateAlternativeCurrencyRate = () => ({
  type: ALTERNATIVE_CURRENCY_INVALIDATE_RATE,
});

export const fetchAlternativeCurrencyRateIfNeeded = () => async (dispatch, getState) => {
  const state = getState().alternativeCurrency;
  const { code } = state;
  if (shouldFetchRate(state)) {
    dispatch({ type: ALTERNATIVE_CURRENCY_GET_RATE_ASYNC.REQUEST });
    const rate = await getRate(code);
    if (!rate) {
      dispatch({ type: ALTERNATIVE_CURRENCY_GET_RATE_ASYNC.FAILURE });
    } else {
      dispatch({ type: ALTERNATIVE_CURRENCY_GET_RATE_ASYNC.SUCCESS, rate });
    }
  }
};
