import { createSelector } from 'reselect';

const profilesSelector = state => state.profiles;

export const searchResultsSelector = createSelector(
  [profilesSelector], ({ searchResults }) => Object.values(searchResults),
);

export default profilesSelector;
