/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import Fuzzy from "fuse.js";

// Internal dependencies
import { CREATE_LOCAL_CONTACT } from "state/action-types";
import { UPDATE_LOCAL_CONTACT } from "state/action-types";
import { DELETE_LOCAL_CONTACT } from "state/action-types";
import { SEARCH_LOCAL_CONTACTS_REQUEST } from "state/action-types";
import { SEARCH_LOCAL_CONTACTS_SUCCESS } from "state/action-types";
import { SEARCH_LOCAL_CONTACTS_FAILURE } from "state/action-types";
import defaults from "./defaults";

export function createLocalContact(contact) {
  return {
    type: CREATE_LOCAL_CONTACT,
    contact
  };
}

export function updateLocalContact(contact) {
  return {
    type: UPDATE_LOCAL_CONTACT,
    contact
  };
}

export function deleteLocalContact(contact) {
  return {
    type: DELETE_LOCAL_CONTACT,
    contact
  };
}

export function searchLocalContacts(query, options = defaults) {
  return function(dispatch, getState, walletLib) {
    return dispatch({
      query,
      types: [
        SEARCH_LOCAL_CONTACTS_REQUEST,
        SEARCH_LOCAL_CONTACTS_SUCCESS,
        SEARCH_LOCAL_CONTACTS_FAILURE
      ],
      async asyncTask(state) {
        try {
          const { items } = state.contacts.local;
          const contacts = Object.values(items);
          const fuzzy = new Fuzzy(contacts, options);
          return fuzzy.search(query);
        } catch (error) {
          const { message = "Something went wrong." } = error;
          throw new Error(message);
        }
      }
    });
  };
}
