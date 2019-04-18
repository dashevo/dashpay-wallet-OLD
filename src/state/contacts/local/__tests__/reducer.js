import deepFreeze from 'deep-freeze';

import {
  CREATE_LOCAL_CONTACT,
  UPDATE_LOCAL_CONTACT,
  DELETE_LOCAL_CONTACT,
} from 'state/action-types';
import { items } from '../reducer';

describe('reducer', () => {
  describe('#items()', () => {
    it('should default to an empty object', () => {
      const state = items({}, {});
      expect(state).toEqual({});
    });

    it('should create a contact when create action is dispatched', () => {
      const state = items(
        {},
        {
          type: CREATE_LOCAL_CONTACT,
          contact: {
            address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
            image: 'https://www.dash.org/assets/img/team/ryan.png',
            name: 'Ryan Taylor',
          },
        },
      );
      expect(state).toEqual({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor',
        },
      });
    });

    it('should update a contact when update action is dispatched', () => {
      const state = items(
        {},
        {
          type: UPDATE_LOCAL_CONTACT,
          contact: {
            address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
            image: 'https://www.dash.org/assets/img/team/ryan.png',
            name: 'Ryan Taylor',
          },
        },
      );
      expect(state).toEqual({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor',
        },
      });
    });

    it('should delete a contact when delete action is dispatched', () => {
      const original = deepFreeze({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor',
        },
      });
      const state = items(original, {
        type: DELETE_LOCAL_CONTACT,
        contact: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor',
        },
      });
      expect(state).toEqual({});
    });

    it('should accumulate contacts', () => {
      const original = deepFreeze({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor',
        },
      });
      const state = items(original, {
        type: CREATE_LOCAL_CONTACT,
        contact: {
          address: 'XXKH6u5BWygdaJUPZf8qRbwCFcQMkVrtSs',
          image: 'https://www.dash.org/assets/img/team/bob_carroll.jpg',
          name: 'Bob Carroll',
        },
      });
      expect(state).toEqual({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor',
        },
        XXKH6u5BWygdaJUPZf8qRbwCFcQMkVrtSs: {
          address: 'XXKH6u5BWygdaJUPZf8qRbwCFcQMkVrtSs',
          image: 'https://www.dash.org/assets/img/team/bob_carroll.jpg',
          name: 'Bob Carroll',
        },
      });
    });
  });
});
