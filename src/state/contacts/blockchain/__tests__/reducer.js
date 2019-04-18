import {
  GET_BLOCKCHAIN_CONTACTS_SUCCESS,
} from '../constants';
import reducer from '../reducer';

describe('state/contacts/blockchain/reducer', () => {
  describe('items', () => {
    it('should default to an empty array', () => {
      const state = reducer(undefined, []).items;
      expect(state).toEqual([]);
    });

    it('should handle GET_BLOCKCHAIN_CONTACTS_SUCCESS', () => {
      const response = {
        test: {},
      };
      const payload = { type: GET_BLOCKCHAIN_CONTACTS_SUCCESS, response };
      const expectedState = [{ name: 'test', address: 'test', isContact: true }];
      expect(reducer(undefined, payload).items).toEqual(expectedState);
    });
  });
});
