/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { DEFAULT_ALTERNATIVE_CURRENCY } from './constants';
import { CHANGE_ALTERNATIVE_CURRENCY } from './constants';
import { ALTERNATIVE_CURRENCY_RATE_REQUEST } from './constants';
import { ALTERNATIVE_CURRENCY_RATE_RECEIVED } from './constants';
import { INVALIDATE_ALTERNATIVE_CURRENCY_RATE } from './constants';

export const initialState = DEFAULT_ALTERNATIVE_CURRENCY;

const alternativeCurrency = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_ALTERNATIVE_CURRENCY_RATE:
      return {
        ...state,
        didInvalidate: true,
      };

    case CHANGE_ALTERNATIVE_CURRENCY:
      const { code, name, symbol } = action
      return {
        ...initialState,
        code,
        name,
        symbol,
      };

    case ALTERNATIVE_CURRENCY_RATE_REQUEST:
      return {
        ...state,
        isFetching: true,
        rateUpdatedAt: undefined,
      };

    case ALTERNATIVE_CURRENCY_RATE_RECEIVED:
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
