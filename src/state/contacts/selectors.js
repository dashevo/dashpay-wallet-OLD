// @flow
import { createSelector } from 'reselect';

const contactsSelector = state => state.contacts;

export const filterParamsSelector = createSelector(
  contactsSelector, ({ filterParams }) => filterParams,
);

export const blockchainContactsSelector = createSelector(
  contactsSelector, ({ blockchain }) => blockchain.items,
);

export const pendingRequestsSelector = createSelector(
  contactsSelector, ({ blockchain }) => blockchain.pendingRequests,
);

export const receivedContactRequestsSelector = createSelector(
  pendingRequestsSelector, ({ received }) => received,
);

export const sentContactRequestsSelector = createSelector(
  pendingRequestsSelector, ({ sent }) => sent,
);

export const receivedContactRequestsUsernamesSelector = createSelector(
  receivedContactRequestsSelector,
  receivedContactRequests => receivedContactRequests.map(({ address }) => address),
);

export const sentContactRequestsUsernamesSelector = createSelector(
  sentContactRequestsSelector,
  sentContactRequests => sentContactRequests.map(({ address }) => address),
);

export const localContactsSelector = createSelector(
  contactsSelector, ({ local }) => local.items,
);
