// @flow
import {
  PROFILES_SEARCH_REQUEST,
  PROFILES_SEARCH_SUCCESS,
  PROFILES_SEARCH_FAILURE,
} from './constants';

export const searchProfiles = searchString => (dispatch, getState, walletLib) => dispatch({
  searchString,
  types: [
    PROFILES_SEARCH_REQUEST,
    PROFILES_SEARCH_SUCCESS,
    PROFILES_SEARCH_FAILURE,
  ],
  asyncTask: async () => walletLib
    .account
    .getDAP('dashpaydap')
    .searchProfile(searchString),
});
