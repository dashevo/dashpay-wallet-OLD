import {
  CONTACTS_GET_CONTACTS_ASYNC,
  CONTACTS_SET_FILTER,
  CONTACTS_CLEAR_FILTER,
} from 'state/action-types';
import reducer from 'state/contacts/reducer';

describe('reducer', () => {
  describe('items', () => {
    it('should default to an empty array', () => {
      const state = reducer(undefined, []).items;
      expect(state).toEqual([]);
    });

    it('should handle CONTACTS_GET_CONTACTS_ASYNC.SUCCESS', () => {
      const response = [{
        $meta: { userId: 'testUserId' },
      }];
      const payload = { type: CONTACTS_GET_CONTACTS_ASYNC.SUCCESS, response };
      const expectedState = [{
        userId: 'testUserId',
        image: 'https://api.adorable.io/avatars/285/testUserId.png',
      }];
      expect(reducer(undefined, payload).items).toEqual(expectedState);
    });
  });

  describe('filterParams', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {}).filterParams).toEqual({ query: '', isActive: false });
    });

    it('should handle SET_FILTER', () => {
      const payload = { filterParams: { query: 'test' }, type: CONTACTS_SET_FILTER };
      const expectedState = { query: 'test', isActive: true };
      expect(reducer(undefined, payload).filterParams).toEqual(expectedState);
    });

    it('should handle CONTACTS_CLEAR_FILTER', () => {
      const state = { filterParams: { query: 'test', isActive: true } };
      const payload = { type: CONTACTS_CLEAR_FILTER };
      const expectedState = { query: '', isActive: false };
      expect(reducer(state, payload).filterParams).toEqual(expectedState);
    });
  });
});
