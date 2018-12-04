import { ADD_CONTACT } from 'state/contacts/constants';
import { CONTACT_REQUEST_SENT } from 'state/contacts/constants';
import { CONTACT_REQUEST_RECEIVED } from 'state/contacts/constants';
import { UPDATE_CONTACT } from 'state/contacts/constants';
import { REMOVE_CONTACT } from 'state/contacts/constants';
import { CONTACT_STATES } from 'state/contacts/constants';
import { initialState } from 'state/contacts/reducer';
import reducer from 'state/contacts/reducer';

describe('contacts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_CONTACT', () => {
    const contact = { address: 'contact_address' };
    const payload = { contact, type: ADD_CONTACT };
    const expectedState = [...initialState, { ...contact, state: CONTACT_STATES.ADDED }];
    expect(reducer(undefined, payload)).toEqual(expectedState);
  });

  it('should handle CONTACT_REQUEST_SENT', () => {
    const contact = { address: 'contact_address' };
    const state = [{ ...contact, state: CONTACT_STATES.ADDED }];
    const payload = { address: contact.address, type: CONTACT_REQUEST_SENT };
    const expectedState = [{ ...contact, state: CONTACT_STATES.REQUEST_SENT }];
    expect(reducer(state, payload)).toEqual(expectedState);
  });

  it('should handle CONTACT_REQUEST_RECEIVED', () => {
    const contact = { address: 'contact_address' };
    const payload = { contact, type: CONTACT_REQUEST_RECEIVED };
    const expectedState = [...initialState, { ...contact, state: CONTACT_STATES.REQUEST_RECEIVED }];
    expect(reducer(undefined, payload)).toEqual(expectedState);
  });

  it('should handle REMOVE_CONTACT', () => {
    const address = 'contact_address1';
    const untouchedContact = { address: 'contact_address2' };
    const state = [{ address }, untouchedContact];
    const payload = { address, type: REMOVE_CONTACT };
    const expectedState = [untouchedContact];
    expect(reducer(state, payload)).toEqual(expectedState);
  });

  it('should handle UPDATE_CONTACT', () => {
    const address = 'contact_address';
    const state = [{ address, name: 'name1' }];
    const payload = { contact: { address, name: 'name2' }, type: UPDATE_CONTACT };
    const expectedState = [{ address, name: 'name2' }];
    expect(reducer(state, payload)).toEqual(expectedState);
  });
});

