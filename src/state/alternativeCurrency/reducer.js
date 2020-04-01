import {
  ALTERNATIVE_CURRENCY_GET_RATE_ASYNC,
  ALTERNATIVE_CURRENCY_INVALIDATE_RATE,
  ALTERNATIVE_CURRENCY_SET_CURRENCY,
} from 'state/action-types';
import {
  DEFAULT_ALTERNATIVE_CURRENCY,
} from './constants';

export const initialState = DEFAULT_ALTERNATIVE_CURRENCY;

const alternativeCurrency = (state = initialState, action) => {
  switch (action.type) {
    case ALTERNATIVE_CURRENCY_INVALIDATE_RATE:
      return {
        ...state,
        didInvalidate: true,
      };

    case ALTERNATIVE_CURRENCY_SET_CURRENCY:
      return {
        ...initialState,
        code: action.code,
        name: action.name,
        symbol: action.symbol,
      };

    case ALTERNATIVE_CURRENCY_GET_RATE_ASYNC.REQUEST:
      return {
        ...state,
        isFetching: true,
        rateUpdatedAt: undefined,
      };

    case ALTERNATIVE_CURRENCY_GET_RATE_ASYNC.SUCCESS:
      return {
        ...state,
        rate: action.rate,
        isFetching: false,
        didInvalidate: false,
        rateUpdatedAt: Date.now(),
      };
    default:
      return state;
  }
};

export default alternativeCurrency;
