// @flow
import { combineReducers } from 'redux';
import {
  omit,
} from 'lodash';

import {
  CREATE_LOCAL_CONTACT,
  UPDATE_LOCAL_CONTACT,
  DELETE_LOCAL_CONTACT,
} from 'state/action-types';

// Tmp
import data from './data';

const mock = data.map(contactData => ({ ...contactData, isContact: true }));

export function items(state = mock, action) {
  let contact;
  switch (action.type) {
    case CREATE_LOCAL_CONTACT:
    case UPDATE_LOCAL_CONTACT:
      contact = action.contact;
      return Object.assign({}, state, {
        [contact.address]: contact,
      });

    case DELETE_LOCAL_CONTACT:
      return omit(state, action.contact.address);

    default:
      return state;
  }
}

export default combineReducers({
  items,
});
