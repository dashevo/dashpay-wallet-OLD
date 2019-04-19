import {
  SET_FILTER,
  CLEAR_FILTER,
} from 'state/contacts/constants';
import reducer from 'state/contacts/reducer';

describe('state/contacts/reducer', () => {
  describe('filterParams', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {}).filterParams).toEqual({ query: '', isActive: false });
    });

    it('should handle SET_FILTER', () => {
      const payload = { filterParams: { query: 'test' }, type: SET_FILTER };
      const expectedState = { query: 'test', isActive: true };
      expect(reducer(undefined, payload).filterParams).toEqual(expectedState);
    });

    it('should handle CLEAR_FILTER', () => {
      const state = { filterParams: { query: 'test', isActive: true } };
      const payload = { type: CLEAR_FILTER };
      const expectedState = { query: '', isActive: false };
      expect(reducer(state, payload).filterParams).toEqual(expectedState);
    });
  });
});
