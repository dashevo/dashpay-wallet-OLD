import {
  PROFILES_SEARCH_ASYNC,
} from 'state/action-types';

export const searchProfiles = searchString => (
  dispatch, getState, { account: { dashPayDap } },
) => dispatch({
  searchString,
  types: PROFILES_SEARCH_ASYNC,
  asyncTask: () => dashPayDap.searchProfile(searchString),
});
