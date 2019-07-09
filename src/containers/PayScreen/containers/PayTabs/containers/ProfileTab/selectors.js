import { createSelector } from 'reselect';
import { contactSelectorFactory } from 'state/contacts/selectors';
import { profilesSelector } from 'state/profiles/selectors';

const usernameSelector = (state, props) => props.navigation.getParam('recipient', '');
const stateSelector = (state, props) => props.navigation.getParam('state', '');

export default createSelector(
  usernameSelector,
  stateSelector,
  contactSelectorFactory,
  profilesSelector,
  (username, state, contactSelector, { searchResults }) => {
    const user = contactSelector(username) || searchResults[username] || {};
    const { avatarUrl = '' } = user;
    return {
      user: {
        avatarUrl,
        username,
      },
      state,
    };
  },
);
