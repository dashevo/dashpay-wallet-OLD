// @flow
import {
  CREATE_LOCAL_CONTACT,
  UPDATE_LOCAL_CONTACT,
  DELETE_LOCAL_CONTACT,
} from 'state/action-types';

export function createLocalContact(contact) {
  return {
    type: CREATE_LOCAL_CONTACT,
    contact,
  };
}

export function updateLocalContact(contact) {
  return {
    type: UPDATE_LOCAL_CONTACT,
    contact,
  };
}

export function deleteLocalContact(contact) {
  return {
    type: DELETE_LOCAL_CONTACT,
    contact,
  };
}
