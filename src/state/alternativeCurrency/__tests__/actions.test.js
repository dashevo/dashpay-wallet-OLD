import { ALTERNATIVE_CURRENCY_SET_CURRENCY } from 'state/action-types';
import { setAlternativeCurrency } from 'state/alternativeCurrency/actions';

describe('alternativeCurrency actions', () => {
  it('should create an action to set the new alternative currency', () => {
    const expectedAction = {
      type: ALTERNATIVE_CURRENCY_SET_CURRENCY,
      code: 'USD',
      name: 'US Dollar',
      symbol: '$',
    };
    expect(setAlternativeCurrency('USD')).toEqual(expectedAction);
  });
});
