import {
  PROFILES_GET_CONTACTS_ASYNC,
} from 'state/action-types';

export const getContacts = () => (
  dispatch, getState, { account: { dashPayDpa } },
) => dispatch({
  types: PROFILES_GET_CONTACTS_ASYNC,
  asyncTask: async () => {
    const { username } = getState().account;
    const [profile] = await dashPayDpa.profile.getByBUsername(username);
    return profile.contact.getAll();
  },
});
