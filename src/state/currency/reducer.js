/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { DEFAULT_CURRENCY, CHANGE_CURRENCY } from './constants';

export const initialState = DEFAULT_CURRENCY;

const currency = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return action.currency;

    default:
      return state;
  }
};

export default currency;
