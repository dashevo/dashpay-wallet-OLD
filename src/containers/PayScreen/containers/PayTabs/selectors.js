import { createSelector } from 'reselect';
import { contactSelectorFactory } from 'state/contacts/selectors';

const recipientSelector = (state, props) => props.navigation.getParam('recipient', '');

export default createSelector(
  recipientSelector,
  contactSelectorFactory,
  (recipient, contactSelector) => {
    const contact = contactSelector(recipient) || {};
    const { name = '', image = '' } = contact;
    return {
      recipient,
      image,
      name,
    };
  },
);
