/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import { SEARCH_BLOCKCHAIN_CONTACTS_REQUEST } from 'state/action-types';
import { SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS } from 'state/action-types';
import { SEARCH_BLOCKCHAIN_CONTACTS_FAILURE } from 'state/action-types';

import { ACCEPT_BLOCKCHAIN_CONTACT_REQUEST } from 'state/action-types';
import { ACCEPT_BLOCKCHAIN_CONTACT_SUCCESS } from 'state/action-types';
import { ACCEPT_BLOCKCHAIN_CONTACT_FAILURE } from 'state/action-types';

import { REJECT_BLOCKCHAIN_CONTACT_REQUEST } from 'state/action-types';
import { REJECT_BLOCKCHAIN_CONTACT_SUCCESS } from 'state/action-types';
import { REJECT_BLOCKCHAIN_CONTACT_FAILURE } from 'state/action-types';

import { SEND_CONTACT_REQUEST_REQUEST } from "./constants";
import { SEND_CONTACT_REQUEST_SUCCESS } from "./constants";
import { SEND_CONTACT_REQUEST_FAILURE } from "./constants";

import { GET_PENDING_CONTACT_REQUESTS_REQUEST } from "./constants";
import { GET_PENDING_CONTACT_REQUESTS_SUCCESS } from "./constants";
import { GET_PENDING_CONTACT_REQUESTS_FAILURE } from "./constants";

import searchApi from './api';
import defaults from './defaults';
import { random } from 'lodash';

export function sendContactRequest(address) {
  return function(dispatch, getState, walletLib) {
    return dispatch({
      address,
      types: [
        SEND_CONTACT_REQUEST_REQUEST,
        SEND_CONTACT_REQUEST_SUCCESS,
        SEND_CONTACT_REQUEST_FAILURE
      ],
      async asyncTask() {
        const dashPayDap = walletLib.account.getDAP('dashpaydap');
        return dashPayDap.sendContactRequest(address);
      }
    });
  };
}

export function getPendingContactRequests(address) {
  return function(dispatch, getState, walletLib) {
    return dispatch({
      types: [
        GET_PENDING_CONTACT_REQUESTS_REQUEST,
        GET_PENDING_CONTACT_REQUESTS_SUCCESS,
        GET_PENDING_CONTACT_REQUESTS_FAILURE
      ],
      async asyncTask() {
        const dashPayDap = walletLib.account.getDAP('dashpaydap');
        return dashPayDap.getPendingContactRequests();
      }
    });
  };
}

export function searchBlockchainContacts(query, options = defaults) {
  return function(dispatch, getState, walletLib) {
    return dispatch({
      query,
      types: [
        SEARCH_BLOCKCHAIN_CONTACTS_REQUEST,
        SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS,
        SEARCH_BLOCKCHAIN_CONTACTS_FAILURE
      ],
      async asyncTask() {
        const dashPayDap = walletLib.account.getDAP('dashpaydap');
        const contacts = await dashPayDap.getContacts();
        return searchApi(contacts, query);
      }
    });
  };
}

export function acceptBlockchainContact(address) {
  return function(dispatch, getState, walletLib) {
    return dispatch({
      address,
      types: [
        ACCEPT_BLOCKCHAIN_CONTACT_REQUEST,
        ACCEPT_BLOCKCHAIN_CONTACT_SUCCESS,
        ACCEPT_BLOCKCHAIN_CONTACT_FAILURE
      ],
      async asyncTask() {
        const dashPayDap = walletLib.account.getDAP('dashpaydap');
        const response = await dashPayDap.acceptContactRequest(address);
        return {
          address,
          response,
        };
      }
    });
  };
}

export function rejectBlockchainContact(contact) {
  return function(dispatch, getState, walletLib) {
    return dispatch({
      contact,
      types: [
        REJECT_BLOCKCHAIN_CONTACT_REQUEST,
        REJECT_BLOCKCHAIN_CONTACT_SUCCESS,
        REJECT_BLOCKCHAIN_CONTACT_FAILURE
      ],
      async asyncTask(state) {
        // await wait(random(1500, 3000));
        return Promise.resolve(contact);
      }
    });
  };
}
