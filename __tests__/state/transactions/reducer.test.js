import { TRANSACTIONS_GET_TRANSACTIONS_ASYNC } from 'state/action-types';
import reducer from 'state/transactions/reducer';

const initialState = {
  history: [],
};

describe('transactions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_TRANSACTIONS_SUCCESS', () => {
    const response = [{ txid: 'test1' }, { txid: 'test2' }];
    expect(
      reducer(undefined, { type: TRANSACTIONS_GET_TRANSACTIONS_ASYNC.SUCCESS, response }),
    ).toEqual({ ...initialState, history: response });
  });
});
