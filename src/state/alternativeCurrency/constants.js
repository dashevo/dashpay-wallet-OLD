import { ALTERNATIVE_CURRENCIES } from 'constants';

const usdCurrency = ALTERNATIVE_CURRENCIES.find(({ code }) => code === 'USD');
export const DEFAULT_ALTERNATIVE_CURRENCY = {
  ...usdCurrency,
  didInvalidate: true,
  isFetching: false,
};

export const ALTERNATIVE_CURRENCY_RATE_LIFESPAN = 30000;
