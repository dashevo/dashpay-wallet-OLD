import {
  ALTERNATIVE_CURRENCY_SET_CURRENCY,
  ALTERNATIVE_CURRENCY_INVALIDATE_RATE,
  ALTERNATIVE_CURRENCY_GET_RATE_ASYNC,
} from 'state/action-types';
import reducer from 'state/alternativeCurrency/reducer';
import mockDate from 'mockdate';

const initialState = {
  code: 'USD',
  name: 'US Dollar',
  symbol: '$',
  isFetching: false,
  didInvalidate: true,
};

describe('alternativeCurrency reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ALTERNATIVE_CURRENCY_INVALIDATE_RATE', () => {
    const state = { didInvalidate: false };
    const payload = { type: ALTERNATIVE_CURRENCY_INVALIDATE_RATE };
    const expectedState = { didInvalidate: true };
    expect(reducer(state, payload)).toEqual(expectedState);
  });

  it('should handle ALTERNATIVE_CURRENCY_SET_CURRENCY', () => {
    const alternativeCurrency = { code: 'EUR', name: 'Euro', symbol: '€' };
    const payload = { ...alternativeCurrency, type: ALTERNATIVE_CURRENCY_SET_CURRENCY };
    const expectedState = {
      ...initialState,
      ...alternativeCurrency,
      didInvalidate: true,
    };
    expect(reducer(undefined, payload)).toEqual(expectedState);
  });

  it('should handle ALTERNATIVE_CURRENCY_GET_RATE_ASYNC.REQUEST', () => {
    const payload = { type: ALTERNATIVE_CURRENCY_GET_RATE_ASYNC.REQUEST };
    const expectedState = { ...initialState, isFetching: true };
    expect(reducer(undefined, payload)).toEqual(expectedState);
    mockDate.reset();
  });

  it('should handle ALTERNATIVE_CURRENCY_GET_RATE_ASYNC.SUCCESS', () => {
    const rate = 2000;
    const payload = {
      type: ALTERNATIVE_CURRENCY_GET_RATE_ASYNC.SUCCESS,
      rate,
    };
    const now = Date.now();
    mockDate.set(now);
    const expectedState = {
      ...initialState,
      rate,
      didInvalidate: false,
      isFetching: false,
      rateUpdatedAt: now,
    };
    expect(reducer(undefined, payload)).toEqual(expectedState);
    mockDate.reset();
  });
});
