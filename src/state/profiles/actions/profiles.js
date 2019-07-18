// @flow
import {
  PROFILES_SET_FILTER,
  PROFILES_CLEAR_FILTER,
  PROFILES_REGISTER_ASYNC,
  PROFILES_SEARCH_ASYNC,
  PROFILES_GET_BY_BUSERNAME_ASYNC,
} from 'state/action-types';
import type { Profile, FilterParams } from 'state/profiles/types';

export const setFilter = (filterParams: FilterParams) => ({
  type: PROFILES_SET_FILTER,
  filterParams,
});

export const clearFilter = () => ({
  type: PROFILES_CLEAR_FILTER,
});

export const registerProfile = ({
  avatarUrl,
  bio,
  username,
}: Profile) => (
  dispatch, getState, { account: { dashPayDpa } },
) => dispatch({
  types: PROFILES_REGISTER_ASYNC,
  asyncTask: async () => {
    const buser = await dashPayDpa.buser.get(username);
    await buser.synchronize();
    await buser.own(dashPayDpa.getBUserSigningPrivateKey());
    const profile = await dashPayDpa.profile.create({
      avatarUrl,
      bio,
    });
    profile.setOwner(buser);
    return profile.register();
  },
});

export const getByBUsername = (username: string) => (dispatch, getState, walletLib) => dispatch({
  types: PROFILES_GET_BY_BUSERNAME_ASYNC,
  asyncTask: async () => {
    try {
      const {
        account: { dashPayDpa },
      } = walletLib;
      return await dashPayDpa.profile.getByBUsername(username);
    } catch (error) {
      throw new Error(error);
    }
  },
});

export const searchProfiles = (searchString: string) => (
  dispatch, getState, { account: { dashPayDpa } },
) => dispatch({
  searchString,
  types: PROFILES_SEARCH_ASYNC,
  // TODO: replace when we have search by username
  // asyncTask: () => dashPayDpa.profile.get(searchString),
  asyncTask: async () => {
    try {
      const {
        account: { dashPayDpa },
      } = walletLib;
      const getProfiles = await dashPayDpa.profile.getAll();
      return Promise.all(getProfiles);
    } catch (error) {
      throw new Error(error);
    }
  },
});
