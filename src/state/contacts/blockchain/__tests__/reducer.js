/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import deepFreeze from 'deep-freeze';

import {
  GET_BLOCKCHAIN_CONTACTS_REQUEST,
  GET_BLOCKCHAIN_CONTACTS_SUCCESS,
  GET_BLOCKCHAIN_CONTACTS_FAILURE,
} from '../constants';
import reducer from '../reducer';

describe('state/contacts/blockchain/reducer', () => {
  describe('#items()', () => {
    it('should default to an empty array', () => {
      const state = reducer.items({}, []);
      expect(state).toEqual({});
    });

    it('should accumulate contacts from the search results', () => {
      const original = deepFreeze({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://dashpay-wallet-static.dash.org/team/ryan.png',
          name: 'Ryan Taylor'
        }
      });
      const state = items(original, {
        type: GET_BLOCKCHAIN_CONTACTS_SUCCESS,
        query: 'Bob Carroll',
        response: [
          {
            address: 'XXKH6u5BWygdaJUPZf8qRbwCFcQMkVrtSs',
            image: 'https://dashpay-wallet-static.dash.org/team/bob_carroll.jpg',
            name: 'Bob Carroll'
          }
        ]
      });
      expect(state).toEqual({
        XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK: {
          address: 'XYqcZmR4puhHT5WvarBzfXNskxJS2UL8nK',
          image: 'https://dashpay-wallet-static.dash.org/team/ryan.png',
          name: 'Ryan Taylor'
        },
        XXKH6u5BWygdaJUPZf8qRbwCFcQMkVrtSs: {
          address: 'XXKH6u5BWygdaJUPZf8qRbwCFcQMkVrtSs',
          image: 'https://dashpay-wallet-static.dash.org/team/bob_carroll.jpg',
          name: 'Bob Carroll'
        }
      });
    });
  });
});
