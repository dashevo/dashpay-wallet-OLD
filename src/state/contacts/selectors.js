// @flow
import { createSelector } from 'reselect';
import { memoize } from 'lodash';

const scopeSelector = state => state.contacts;

export const contactsSelector = createSelector(
  scopeSelector, ({ items }) => items,
);

export const filterParamsSelector = createSelector(
  scopeSelector, ({ filterParams }) => filterParams,
);

export const pendingRequestsSelector = createSelector(
  scopeSelector, ({ pendingRequests }) => pendingRequests,
);

export const receivedRequestsSelector = createSelector(
  pendingRequestsSelector, ({ received }) => received,
);

export const sentRequestsSelector = createSelector(
  pendingRequestsSelector, ({ sent }) => sent,
);

export const receivedRequestsUsernamesSelector = createSelector(
  receivedRequestsSelector,
  receivedContactRequests => receivedContactRequests.map(({ userId }) => userId),
);

export const sentContactRequestsUsernamesSelector = createSelector(
  sentRequestsSelector,
  sentContactRequests => sentContactRequests.map(({ userId }) => userId),
);

export const contactSelectorFactory = createSelector(
  contactsSelector,
  items => memoize(
    (username: string) => items.find(contact => contact.username === username),
  ),
);
