/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { RECEIVE_BALANCE } from 'state/account/constants';
import { GET_UNUSED_ADDRESS_SUCCESS } from 'state/account/constants';
import { CHANGE_NETWORK_SUCCESS } from 'state/account/constants';
import { initialState } from 'state/account/reducer';
import reducer from 'state/account/reducer';
import mockDate from 'mockdate';

describe('account reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_BALANCE', () => {
    const payload = { response: 100, type: RECEIVE_BALANCE };
    const expectedState = { ...initialState, balance: 100 };
    expect(reducer(undefined, payload)).toEqual(expectedState);
  });

  it('should handle GET_UNUSED_ADDRESS_SUCCESS', () => {
    const payload = { response: { address: 'unusedAddress' }, type: GET_UNUSED_ADDRESS_SUCCESS};
    const expectedState = { ...initialState, unusedAddress: 'unusedAddress' };
    expect(reducer(undefined, payload)).toEqual(expectedState);
  });
});
