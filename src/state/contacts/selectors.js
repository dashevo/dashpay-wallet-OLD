// @flow
import { createSelector } from 'reselect';

const contactsSelector = state => state.contacts;
export const filterParamsSelector = createSelector(
  [contactsSelector], ({ filterParams }) => filterParams,
);
export const blockchainContactsSelector = createSelector(
  [contactsSelector], ({ blockchain }) => blockchain.items,
);
export const localContactsSelector = createSelector(
  [contactsSelector], ({ local }) => local.items,
);

export default contactsSelector;
