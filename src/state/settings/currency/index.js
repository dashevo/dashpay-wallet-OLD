/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
const initialState = 'usd';

const currency = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return action.currency;

    default:
      return state;
  }
};
export default currency;

export const changeCurrency = currency => ({
  type: CHANGE_CURRENCY,
  currency
});

export const selectCurrency = state => state.settings.currency;
