// @flow
import {
  GET_BLOCKCHAIN_CONTACTS_REQUEST,
  GET_BLOCKCHAIN_CONTACTS_SUCCESS,
  GET_BLOCKCHAIN_CONTACTS_FAILURE,

  ACCEPT_BLOCKCHAIN_CONTACT_REQUEST,
  ACCEPT_BLOCKCHAIN_CONTACT_SUCCESS,
  ACCEPT_BLOCKCHAIN_CONTACT_FAILURE,

  REJECT_BLOCKCHAIN_CONTACT_REQUEST,
  REJECT_BLOCKCHAIN_CONTACT_SUCCESS,
  REJECT_BLOCKCHAIN_CONTACT_FAILURE,

  SEND_CONTACT_REQUEST_REQUEST,
  SEND_CONTACT_REQUEST_SUCCESS,
  SEND_CONTACT_REQUEST_FAILURE,

  GET_PENDING_CONTACT_REQUESTS_REQUEST,
  GET_PENDING_CONTACT_REQUESTS_SUCCESS,
  GET_PENDING_CONTACT_REQUESTS_FAILURE,
} from './constants';

export function sendContactRequest(address) {
  return (dispatch, getState, walletLib) => dispatch({
    address,
    types: [
      SEND_CONTACT_REQUEST_REQUEST,
      SEND_CONTACT_REQUEST_SUCCESS,
      SEND_CONTACT_REQUEST_FAILURE,
    ],
    async asyncTask() {
      const dashPayDap = walletLib.account.getDAP('dashpaydap');
      return dashPayDap.sendContactRequest(address);
    },
  });
}

export function getPendingContactRequests() {
  return (dispatch, getState, walletLib) => dispatch({
    types: [
      GET_PENDING_CONTACT_REQUESTS_REQUEST,
      GET_PENDING_CONTACT_REQUESTS_SUCCESS,
      GET_PENDING_CONTACT_REQUESTS_FAILURE,
    ],
    async asyncTask() {
      const dashPayDap = walletLib.account.getDAP('dashpaydap');
      return dashPayDap.getPendingContactRequests();
    },
  });
}

export function getContacts() {
  return (dispatch, getState, walletLib) => dispatch({
    types: [
      GET_BLOCKCHAIN_CONTACTS_REQUEST,
      GET_BLOCKCHAIN_CONTACTS_SUCCESS,
      GET_BLOCKCHAIN_CONTACTS_FAILURE,
    ],
    async asyncTask() {
      const dashPayDap = walletLib.account.getDAP('dashpaydap');
      const contacts = await dashPayDap.getContacts();
      return contacts;
    },
  });
}

export function acceptBlockchainContact(address) {
  return (dispatch, getState, walletLib) => dispatch({
    address,
    types: [
      ACCEPT_BLOCKCHAIN_CONTACT_REQUEST,
      ACCEPT_BLOCKCHAIN_CONTACT_SUCCESS,
      ACCEPT_BLOCKCHAIN_CONTACT_FAILURE,
    ],
    async asyncTask() {
      const dashPayDap = walletLib.account.getDAP('dashpaydap');
      const response = await dashPayDap.acceptContactRequest(address);
      return {
        address,
        response,
      };
    },
  });
}

export function rejectBlockchainContact(contact) {
  return (dispatch, getState, walletLib) => dispatch({
    contact,
    types: [
      REJECT_BLOCKCHAIN_CONTACT_REQUEST,
      REJECT_BLOCKCHAIN_CONTACT_SUCCESS,
      REJECT_BLOCKCHAIN_CONTACT_FAILURE,
    ],
    async asyncTask() {
      // TODO: rejection of blockchain contact
      return Promise.resolve(contact);
    },
  });
}
