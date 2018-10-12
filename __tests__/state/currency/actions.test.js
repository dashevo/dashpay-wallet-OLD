import { CHANGE_CURRENCY } from 'state/currency/constants';
import { changeCurrency } from 'state';

describe('currency actions', () => {
  it('should create an action to set the new currency', () => {
    const currency = { code: 'USD' }
    const expectedAction = {
      currency,
      type: CHANGE_CURRENCY,
    };
    expect(changeCurrency(currency)).toEqual(expectedAction);
  });
});
