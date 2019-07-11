import reducer from 'state/profiles/reducer';
import {
  PROFILES_GET_BY_BUSERNAME_ASYNC,
} from 'state/action-types';

describe('reducer', () => {
  describe('items', () => {
    it('should default to an empty array', () => {
      const state = reducer(undefined, []).items;
      expect(state).toEqual({});
    });

    it('should handle PROFILES_GET_BY_BUSERNAME_ASYNC.SUCCESS', () => {
      const userId = 'testUserId';
      const username = 'testUserName';
      const avatarUrl = 'https://api.adorable.io/avatars/285/testUserId.png';
      const bio = 'test bio';
      const response = [{
        $meta: { userId },
        buser: { username },
        avatarUrl,
        bio,
      }];
      const payload = {
        type: PROFILES_GET_BY_BUSERNAME_ASYNC.SUCCESS,
        response,
      };
      const expectedState = {
        [username]: {
          username,
          userId,
          avatarUrl,
          bio,
        },
      };
      expect(reducer(undefined, payload).items).toEqual(expectedState);
    });
  });
});
