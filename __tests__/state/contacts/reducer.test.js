import { ADD_CONTACT } from 'state/contacts/constants';
import { CONTACT_REQUEST_SENT } from 'state/contacts/constants';
import { CONTACT_REQUEST_RECEIVED } from 'state/contacts/constants';
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
    const expectedState = [ ...initialState, { ...contact, state: CONTACT_STATES.ADDED } ];
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
    const expectedState = [ ...initialState, { ...contact, state: CONTACT_STATES.REQUEST_RECEIVED } ];
    expect(reducer(undefined, payload)).toEqual(expectedState);
  });
});

