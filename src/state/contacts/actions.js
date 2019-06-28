import {
  CONTACTS_SET_FILTER,
  CONTACTS_CLEAR_FILTER,
  CONTACTS_GET_CONTACTS_ASYNC,
  CONTACTS_ACCEPT_REQUEST_ASYNC,
  CONTACTS_REJECT_REQUEST_ASYNC,
  CONTACTS_SEND_REQUEST_ASYNC,
  CONTACTS_GET_PENDING_REQUESTS_ASYNC,
} from 'state/action-types';

export const setFilter = filterParams => ({
  type: CONTACTS_SET_FILTER,
  filterParams,
});

export const clearFilter = () => ({
  type: CONTACTS_CLEAR_FILTER,
});

export const sendRequest = address => (dispatch, getState, walletlib) => {
  const {
    account: { dashPayDap },
  } = walletlib;
  return dispatch({
    address,
    types: CONTACTS_SEND_REQUEST_ASYNC,
    asyncTask: () => dashPayDap.contactRequest.send(address),
  });
};

export const getPendingRequests = () => (dispatch, getState, walletlib) => {
  const {
    account: { dashPayDap },
  } = walletlib;
  return dispatch({
    types: CONTACTS_GET_PENDING_REQUESTS_ASYNC,
    asyncTask: () => {} // dashPayDap.contact.getAll(), // dashPayDap.contactRequest.getAllPending
  });
};

export const getContacts = () => (dispatch, getState, walletlib) => {
  const {
    account: { dashPayDap },
  } = walletlib;
  return dispatch({
    types: CONTACTS_GET_CONTACTS_ASYNC,
    asyncTask: () => dashPayDap.contact.getAll(),
  });
};

export const acceptRequest = address => (dispatch, getState, walletlib) => {
  const {
    account: { dashPayDap },
  } = walletlib;
  return dispatch({
    address,
    types: CONTACTS_ACCEPT_REQUEST_ASYNC,
    async asyncTask() {
      const response = await dashPayDap.contactRequest.accept(address);
      return {
        address,
        response,
      };
    },
  });
};

export const rejectRequest = contact => dispatch => dispatch({
  contact,
  types: CONTACTS_REJECT_REQUEST_ASYNC,
  async asyncTask() {
    // TODO: implement contact rejection
    return Promise.resolve(contact);
  },
});
