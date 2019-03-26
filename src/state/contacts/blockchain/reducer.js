/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { combineReducers } from 'redux';
import { keyBy } from 'lodash';
import { uniq } from 'lodash';
import { add } from 'lodash';

// Internal dependencies
import { SEARCH_BLOCKCHAIN_CONTACTS_REQUEST } from 'state/action-types';
import { SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS } from 'state/action-types';
import { SEARCH_BLOCKCHAIN_CONTACTS_FAILURE } from 'state/action-types';

import { SEND_CONTACT_REQUEST_SUCCESS } from './constants';
import { SEND_CONTACT_REQUEST_FAILURE } from './constants';

export function requests(state = [], action) {
  switch (action.type) {
    case 'GET_PENDING_CONTACT_REQUESTS_SUCCESS':
      return action.response.received.map(address => {
        return {
          address,
        };
      });
    case 'ACCEPT_BLOCKCHAIN_CONTACT_SUCCESS':
      return state.map(request => {
        if (request.recipient === action.response.sender.address) {
          return {
            ...request,
            timestamp: new Date(),
            type: 'accepted'
          };
        } else {
          return request;
        }
      });

    case 'REJECT_BLOCKCHAIN_CONTACT_SUCCESS':
      return state.filter(
        request => request.recipient !== action.response.sender.address
      );

    default:
      return state;
  }
}

export function contacts(state = {}, action) {
  switch (action.type) {
    case SEND_CONTACT_REQUEST_SUCCESS:
      alert('Contact request sent');
      return state;
    case SEND_CONTACT_REQUEST_FAILURE:
      alert('Contact request failed');
      return state;

    default:
      return state;
  }
}

export function counts(state = {}, action) {
  switch (action.type) {
    case SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS:
      return Object.assign({}, state, {
        [action.query]: add(state[action.query], 1)
      });

    default:
      return state;
  }
}

export function isSearching(state = false, action) {
  switch (action.type) {
    case SEARCH_BLOCKCHAIN_CONTACTS_REQUEST:
    case SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS:
    case SEARCH_BLOCKCHAIN_CONTACTS_FAILURE:
      return SEARCH_BLOCKCHAIN_CONTACTS_REQUEST === action.type;

    default:
      return state;
  }
}

export function items(state = {}, action) {
  switch (action.type) {
    case SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS:
      const contacts = keyBy(action.response, 'address');
      return Object.assign({}, state, contacts);

    default:
      return state;
  }
}

export function orders(state = [], action) {
  switch (action.type) {
    case SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS:
      return uniq(state.concat(action.query));

    default:
      return state;
  }
}

export function queries(state = {}, action) {
  switch (action.type) {
    case SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS:
      const ids = action.response.map(contact => contact.address);
      return Object.assign({}, state, { [action.query]: ids });

    default:
      return state;
  }
}

export function query(state = '', action) {
  switch (action.type) {
    case SEARCH_BLOCKCHAIN_CONTACTS_REQUEST:
      return action.query;

    default:
      return state;
  }
}

// TMP
export function visible(state = '', action) {
  switch (action.type) {
    case SEARCH_BLOCKCHAIN_CONTACTS_REQUEST:
    case 'SEARCH_LOCAL_CONTACTS_REQUEST':
      return SEARCH_BLOCKCHAIN_CONTACTS_REQUEST === action.type;

    default:
      return state;
  }
}

export default combineReducers({
  requests,
  counts,
  isSearching,
  items,
  orders,
  queries,
  query,
  contacts,
  visible
});
