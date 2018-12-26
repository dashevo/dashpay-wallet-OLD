import { ADD_CONTACT } from './constants';
import { CONTACT_REQUEST_SENT } from './constants';
import { CONTACT_REQUEST_RECEIVED } from './constants';
import { CONTACT_STATES } from './constants';
import { REMOVE_CONTACT } from './constants';
import { UPDATE_CONTACT } from './constants';
import { ACCEPT_CONTACT_REQUEST } from './constants';
import { ACCEPT_CONTACT_SUCCESS } from './constants';
import { ACCEPT_CONTACT_FAILURE } from './constants';

const mockContacts = [
  {
    address: 'address1',
    state: CONTACT_STATES.ADDED,
  },
  {
    address: 'address2',
    state: CONTACT_STATES.REQUEST_RECEIVED,
  },
]
export const initialState = mockContacts; //[];

const contact = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        address: action.contact.address,
        state: CONTACT_STATES.ADDED,
      };

    case CONTACT_REQUEST_SENT:
      if (state.address !== action.address) {
        return state;
      }
      return {
        ...state,
        state: CONTACT_STATES.REQUEST_SENT,
      };

    case CONTACT_REQUEST_RECEIVED:
      return {
        address: action.contact.address,
        state: CONTACT_STATES.REQUEST_RECEIVED,
      };

    case UPDATE_CONTACT:
      if (state.address !== action.contact.address) {
        return state;
      }
      return {
        ...state,
        ...action.contact,
      };

    default:
      return state;
  }
};

export const contacts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
    case CONTACT_REQUEST_RECEIVED:
      return [
        ...state,
        contact(undefined, action),
      ];

    case UPDATE_CONTACT:
    case CONTACT_REQUEST_SENT:
      return state.map(c => contact(c, action));

    case REMOVE_CONTACT:
      return state.filter(contact => contact.address !== action.address);

    default:
      return state;
  }
};


// External dependencies
import { combineReducers } from "redux";

// Internal dependencies
import blockchain from "./blockchain/reducer";
import local from "./local/reducer";

export default combineReducers({
  blockchain,
  local
});
