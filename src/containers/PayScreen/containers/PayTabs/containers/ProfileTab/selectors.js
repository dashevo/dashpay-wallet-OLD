import { createSelector } from 'reselect';
import { contactSelectorFactory } from 'state/contacts/selectors';
import { profileSelectorFactory } from 'state/profiles/selectors';

const usernameSelector = (state, props) => props.navigation.getParam('recipient', '');
const stateSelector = (state, props) => props.navigation.getParam('state', '');

export default createSelector(
  usernameSelector,
  stateSelector,
  contactSelectorFactory,
  profileSelectorFactory,
  (username, state, contactSelector, profileSelector) => {
    const user = contactSelector(username) || profileSelector(username) || {};
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
