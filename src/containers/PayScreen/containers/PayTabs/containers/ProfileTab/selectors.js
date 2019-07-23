import { createSelector } from 'reselect';
import { profileSelectorFactory } from 'state/profiles/selectors';

const usernameSelector = (state, props) => props.navigation.getParam('recipient', '');

const selectors = createSelector(
  usernameSelector,
  profileSelectorFactory,
  (username, profileSelector) => profileSelector(username) || {},
);

export default selectors;
