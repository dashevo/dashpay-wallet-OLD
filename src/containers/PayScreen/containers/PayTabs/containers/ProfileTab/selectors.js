import { createSelector } from 'reselect';
import { contactSelectorFactory } from 'state/contacts/selectors';

const addressSelector = (state, props) => props.navigation.getParam('recipient', '');

export default createSelector(
  addressSelector,
  contactSelectorFactory,
  (username, contactSelector) => {
    const contact = contactSelector(username) || {};
    const { avatarUrl = '' } = contact;
    return {
      user: {
        avatarUrl,
        username,
      },
      initialValues: {
        username,
        avatarUrl,
      },
    };
  },
);
