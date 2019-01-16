import { CONTACT_STATES } from 'state/contacts/constants';

export const selectAllContacts = state => state.contacts.local.items;

export const selectContactRequests = state =>
  selectAllContacts(state).filter(
    contact => contact.state === CONTACT_STATES.REQUEST_RECEIVED
  );