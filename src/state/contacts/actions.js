import { ADD_CONTACT } from 'constants';
import { CONTACT_REQUEST_RECEIVED } from 'constants';
import { CONTACT_REQUEST_SENT } from 'constants';
import { REMOVE_CONTACT } from 'constants';
import { UPDATE_CONTACT } from 'constants';

export const addContact = contact => ({
  contact,
  type: ADD_CONTACT,
});

export const removeContact = address => ({
  address,
  type: REMOVE_CONTACT,
});

export const updateContact = contact => ({
  contact,
  type: UPDATE_CONTACT,
});

export const contactRequestSent = address => ({
  address,
  type: CONTACT_REQUEST_SENT,
});

export const contactRequestReceived = contact => ({
  contact,
  type: CONTACT_REQUEST_RECEIVED,
});
