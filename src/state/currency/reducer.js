/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { DEFAULT_CURRENCY } from './constants';
import { CHANGE_CURRENCY } from './constants';
import { CURRENCY_RATE_RECEIVED } from './constants';

export const initialState = DEFAULT_CURRENCY;

const currency = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      const { code, name } = action.currency
      return {
        code,
        name,
      };

    case CURRENCY_RATE_RECEIVED:
      return {
        ...state,
        rate: action.rate,
      }
    default:
      return state;
  }
};

export default currency;
