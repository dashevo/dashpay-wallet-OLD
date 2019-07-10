import { createSelector } from 'reselect';

export const profilesSelector = state => state.profiles;

export const searchResultsSelector = createSelector(
  profilesSelector, ({ searchResults }) => Object.values(searchResults),
);
