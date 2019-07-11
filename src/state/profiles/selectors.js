import { createSelector } from 'reselect';

export const profilesSelector = state => state.profiles;

export const profileItemsSelector = createSelector(
  profilesSelector, ({ items }) => Object.values(items),
);

export const currentProfileSelectorFactory = createSelector(
  profilesSelector, ({ items }) => username => items[username],
);
