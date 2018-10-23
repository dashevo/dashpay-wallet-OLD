/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { CHANGE_CURRENCY } from 'state/currency/constants';
import reducer from 'state/currency/reducer';

describe('currency reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ code: 'USD' });
  });

  it('should handle CHANGE_CURRENCY', () => {
    const currency = { code: 'EUR' }
    expect(reducer(undefined, { type: CHANGE_CURRENCY, currency })).toEqual(currency);
  })
});
