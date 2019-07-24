import { createSelector } from 'reselect';
import { profileSelectorFactory } from 'state/profiles/selectors';

const recipientSelector = (state, props) => props.navigation.getParam('recipient', '');

const selectors = createSelector(
  recipientSelector,
  profileSelectorFactory,
  (recipient, profileSelector) => {
    const profile = profileSelector(recipient) || {};
    return {
      ...profile,
      recipient, // TODO: check if we need recipient field
    };
  },
);

export default selectors;
