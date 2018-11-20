/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { CHANGE_ALTERNATIVE_CURRENCY } from 'state/alternativeCurrency/constants';
import { changeAlternativeCurrency } from 'state';
import mockDate from 'mockdate';

describe('alternativeCurrency actions', () => {
  it('should create an action to set the new alternative currency', () => {
    const payload = { code: 'USD' };
    const expectedAction = {
      ...payload,
      type: CHANGE_ALTERNATIVE_CURRENCY,
    };
    expect(changeAlternativeCurrency(payload)).toEqual(expectedAction);
  });
});
