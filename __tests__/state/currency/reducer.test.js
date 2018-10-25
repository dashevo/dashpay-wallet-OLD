/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { CHANGE_CURRENCY } from 'state/currency/constants';
import { CURRENCY_RATE_RECEIVED } from 'state/currency/constants';
import reducer from 'state/currency/reducer';

const initialState = { code: 'USD', name: 'US Dollar' };

describe('currency reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_CURRENCY', () => {
    const currency = { code: 'EUR', name: 'Euro' };
    expect(reducer(undefined, { type: CHANGE_CURRENCY, currency })).toEqual(currency);
  })

  it('should handle CURRENCY_RATE_RECEIVED', () => {
    const rate = 2000;
    expect(reducer(undefined, { type: CURRENCY_RATE_RECEIVED, rate })).toEqual({...initialState, rate});
  })
});
