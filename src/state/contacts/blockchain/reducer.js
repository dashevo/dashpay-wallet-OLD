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

function requests(state = [], action) {
  switch (action.type) {
    case GET_PENDING_CONTACT_REQUESTS_SUCCESS:
      return action.response.received.map(address => ({ address }));
    case ACCEPT_BLOCKCHAIN_CONTACT_SUCCESS:
      return state.map((request) => {
        if (request.address === action.address) {
          return {
            ...request,
            timestamp: new Date(),
            type: 'accepted',
          };
        }
        return request;
      });
    case REJECT_BLOCKCHAIN_CONTACT_SUCCESS:
      return state.filter(
        request => request.recipient !== action.response.sender.address
      );
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

function items(state = [], action) {
  switch (action.type) {
    case GET_BLOCKCHAIN_CONTACTS_SUCCESS:
      return Object
        .keys(action.response)
        .map(name => ({ name, address: name, isContact: true }));
    default:
      return state;
  }
}

export default combineReducers({
  requests,
  items,
});
