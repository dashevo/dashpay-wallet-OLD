// @flow
import { combineReducers } from 'redux';
import {
  SEND_CONTACT_REQUEST_SUCCESS,
  SEND_CONTACT_REQUEST_FAILURE,
  GET_BLOCKCHAIN_CONTACTS_SUCCESS,
  GET_PENDING_CONTACT_REQUESTS_SUCCESS,
  ACCEPT_BLOCKCHAIN_CONTACT_SUCCESS,
  REJECT_BLOCKCHAIN_CONTACT_SUCCESS,
} from './constants';

function receivedRequest(state, action) {
  const updateStateOnlyForCurrentRequest = (newState) => {
    if (state.address === action.address) {
      return {
        ...state,
        timestamp: new Date(),
        ...newState,
      };
    }
    return state;
  };
  switch (action.type) {
    case ACCEPT_BLOCKCHAIN_CONTACT_SUCCESS:
      // This will be fixed with the redux schema. type vs status.
      return updateStateOnlyForCurrentRequest({
        type: 'accepted',
        status: 'ACCEPTED',
      });
    case REJECT_BLOCKCHAIN_CONTACT_SUCCESS:
      return updateStateOnlyForCurrentRequest({
        type: 'rejected',
        status: 'REJECTED',
      });

    default:
      return state;
  }
}

function requestMapper(name) {
  return {
    name,
    address: name,
    image: `https://api.adorable.io/avatars/285/${name}.png`,
    status: 'PANDING', // This will be fixed with the redux schema
  };
}

function pendingRequests(state = { received: [], sent: [] }, action) {
  switch (action.type) {
    case GET_PENDING_CONTACT_REQUESTS_SUCCESS:
      return {
        ...state,
        received: action.response.received.map(requestMapper),
        sent: action.response.sent.map(requestMapper),
      };
    case ACCEPT_BLOCKCHAIN_CONTACT_SUCCESS:
      return {
        ...state,
        received: state.received.map(request => receivedRequest(request, action)),
      };
    case REJECT_BLOCKCHAIN_CONTACT_SUCCESS:
      return {
        ...state,
        received: state
          .received
          .filter(request => request.recipient !== action.response.sender.address),
      };
    case SEND_CONTACT_REQUEST_SUCCESS:
      alert('Success');
      return state;
    case SEND_CONTACT_REQUEST_FAILURE:
      alert(`Error: ${action.error.message}`);
      return state;

    default:
      return state;
  }
}


function items(state = [], action) {
  switch (action.type) {
    case GET_BLOCKCHAIN_CONTACTS_SUCCESS:
      return Object.keys(action.response).map(name => ({
        name,
        address: name,
        isContact: true,
        image: `https://api.adorable.io/avatars/285/${name}.png`,
      }));
    default:
      return state;
  }
}

export default combineReducers({
  pendingRequests,
  items,
});
