/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { combineReducers } from 'redux';
import { keyBy } from 'lodash';
import { uniq } from 'lodash';
import { omit } from 'lodash';
import { add } from 'lodash';

// Internal dependencies
import { CREATE_LOCAL_CONTACT } from 'state/action-types';
import { UPDATE_LOCAL_CONTACT } from 'state/action-types';
import { DELETE_LOCAL_CONTACT } from 'state/action-types';
import { SEARCH_LOCAL_CONTACTS_REQUEST } from 'state/action-types';
import { SEARCH_LOCAL_CONTACTS_SUCCESS } from 'state/action-types';
import { SEARCH_LOCAL_CONTACTS_FAILURE } from 'state/action-types';

// Tmp
import data from './data';
const contacts = keyBy(data, 'address');

export function counts(state = {}, action) {
  switch (action.type) {
    case SEARCH_LOCAL_CONTACTS_SUCCESS:
      return Object.assign({}, state, {
        [action.query]: add(state[action.query], 1)
      });

    default:
      return state;
  }
}

export function isSearching(state = false, action) {
  switch (action.type) {
    case SEARCH_LOCAL_CONTACTS_REQUEST:
    case SEARCH_LOCAL_CONTACTS_SUCCESS:
    case SEARCH_LOCAL_CONTACTS_FAILURE:
      return SEARCH_LOCAL_CONTACTS_REQUEST === action.type;

    default:
      return state;
  }
}

export function items(state = contacts, action) {
  let contact;
  switch (action.type) {
    case CREATE_LOCAL_CONTACT:
    case UPDATE_LOCAL_CONTACT:
      contact = action.contact;
      return Object.assign({}, state, {
        [contact.address]: contact
      });

    case DELETE_LOCAL_CONTACT:
      contact = action.contact;
      return omit(state, contact.address);

    default:
      return state;
  }
}

export function orders(state = [], action) {
  switch (action.type) {
    case SEARCH_LOCAL_CONTACTS_SUCCESS:
      return uniq(state.concat(action.query));

    default:
      return state;
  }
}

export function queries(state = {}, action) {
  switch (action.type) {
    case SEARCH_LOCAL_CONTACTS_SUCCESS:
      const ids = action.response.map(contact => contact.address);
      return Object.assign({}, state, { [action.query]: ids });

    default:
      return state;
  }
}

export function query(state = '', action) {
  switch (action.type) {
    case SEARCH_LOCAL_CONTACTS_REQUEST:
      return action.query;

    default:
      return state;
  }
}

export default combineReducers({
  counts,
  isSearching,
  items,
  orders,
  queries,
  query
});
