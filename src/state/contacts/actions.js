import { ADD_CONTACT } from 'constants';
import { CONTACT_REQUEST_RECEIVED } from 'constants';
import { CONTACT_REQUEST_SENT } from 'constants';

export const addContact = contact => ({
  contact,
  type: ADD_CONTACT,
});

export const contactRequestSent = address => ({
  address,
  type: CONTACT_REQUEST_SENT,
});

export const contactRequestReceived = contact => ({
  contact,
  type: CONTACT_REQUEST_RECEIVED,
});
