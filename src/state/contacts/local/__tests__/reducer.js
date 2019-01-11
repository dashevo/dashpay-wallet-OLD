/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import deepFreeze from 'deep-freeze';

import { CREATE_LOCAL_CONTACT } from 'state/action-types';
import { UPDATE_LOCAL_CONTACT } from 'state/action-types';
import { DELETE_LOCAL_CONTACT } from 'state/action-types';
import { SEARCH_LOCAL_CONTACTS_REQUEST } from 'state/action-types';
import { SEARCH_LOCAL_CONTACTS_SUCCESS } from 'state/action-types';
import { SEARCH_LOCAL_CONTACTS_FAILURE } from 'state/action-types';
import { counts } from '../reducer';
import { isSearching } from '../reducer';
import { items } from '../reducer';
import { orders } from '../reducer';
import { queries } from '../reducer';
import { query } from '../reducer';

describe('reducer', () => {
  describe('#counts()', () => {
    it('should count how many times the term query is used', () => {
      const state = counts(
        {},
        {
          type: SEARCH_LOCAL_CONTACTS_SUCCESS,
          query: 'Ryan Taylor',
          response: [
            {
              address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
              image: 'https://www.dash.org/assets/img/team/ryan.png',
              name: 'Ryan Taylor'
            }
          ]
        }
      );
      expect(state).toEqual({
        'Ryan Taylor': 1
      });
    });
  });

  describe('#isSearching()', () => {
    it('should show that a search is in progress after a request', () => {
      const state = isSearching(
        {},
        {
          type: SEARCH_LOCAL_CONTACTS_REQUEST,
          query: 'Ryan Taylor'
        }
      );
      expect(state).toEqual(true);
    });
    it('should show that a search is not in progress after a success', () => {
      const state = isSearching(
        {},
        {
          type: SEARCH_LOCAL_CONTACTS_SUCCESS,
          query: 'Ryan Taylor',
          response: [
            {
              address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
              image: 'https://www.dash.org/assets/img/team/ryan.png',
              name: 'Ryan Taylor'
            }
          ]
        }
      );
      expect(state).toEqual(false);
    });
    it('should show that a search is not in progress after a failure', () => {
      const state = isSearching(
        {},
        {
          type: SEARCH_LOCAL_CONTACTS_FAILURE,
          query: 'Ryan Taylor',
          error: 'Something went wrong'
        }
      );
      expect(state).toEqual(false);
    });
  });

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
            name: 'Ryan Taylor'
          }
        }
      );
      expect(state).toEqual({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor'
        }
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
            name: 'Ryan Taylor'
          }
        }
      );
      expect(state).toEqual({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor'
        }
      });
    });

    it('should delete a contact when delete action is dispatched', () => {
      const original = deepFreeze({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor'
        }
      });
      const state = items(original, {
        type: DELETE_LOCAL_CONTACT,
        contact: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor'
        }
      });
      expect(state).toEqual({});
    });

    it('should accumulate contacts', () => {
      const original = deepFreeze({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor'
        }
      });
      const state = items(original, {
        type: CREATE_LOCAL_CONTACT,
        contact: {
          address: 'XXKH6u5BWygdaJUPZf8qRbwCFcQMkVrtSs',
          image: 'https://www.dash.org/assets/img/team/bob_carroll.jpg',
          name: 'Bob Carroll'
        }
      });
      expect(state).toEqual({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://www.dash.org/assets/img/team/ryan.png',
          name: 'Ryan Taylor'
        },
        XXKH6u5BWygdaJUPZf8qRbwCFcQMkVrtSs: {
          address: 'XXKH6u5BWygdaJUPZf8qRbwCFcQMkVrtSs',
          image: 'https://www.dash.org/assets/img/team/bob_carroll.jpg',
          name: 'Bob Carroll'
        }
      });
    });
  });

  describe('#orders()', () => {
    it('should accumulate order of queries', () => {
      const state = orders([], {
        type: SEARCH_LOCAL_CONTACTS_SUCCESS,
        query: 'Ryan Taylor',
        response: [
          {
            address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
            image: 'https://www.dash.org/assets/img/team/ryan.png',
            name: 'Ryan Taylor'
          }
        ]
      });
      expect(state).toEqual(['Ryan Taylor']);
    });
  });

  describe('#queries()', () => {
    it('should accumulate the search results', () => {
      const state = queries(
        {},
        {
          type: SEARCH_LOCAL_CONTACTS_SUCCESS,
          query: 'Ryan Taylor',
          response: [
            {
              address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
              image: 'https://www.dash.org/assets/img/team/ryan.png',
              name: 'Ryan Taylor'
            }
          ]
        }
      );
      expect(state).toEqual({
        'Ryan Taylor': ['XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK']
      });
    });
  });

  describe('#query()', () => {
    it('should track term query request', () => {
      const state = query(
        {},
        {
          type: SEARCH_LOCAL_CONTACTS_REQUEST,
          query: 'Ryan Taylor'
        }
      );
      expect(state).toEqual('Ryan Taylor');
    });
  });
});
