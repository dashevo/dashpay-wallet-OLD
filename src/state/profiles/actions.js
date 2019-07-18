// @flow
import {
  PROFILES_REGISTER_ASYNC,
  PROFILES_SEARCH_ASYNC,
  PROFILES_GET_BY_BUSERNAME_ASYNC,
} from 'state/action-types';

// https://github.com/eslint/eslint/issues/11408
export function registerProfile({ avatarUrl, bio, username }) {
  return (dispatch, getState, walletLib) => dispatch({
    types: PROFILES_REGISTER_ASYNC,
    asyncTask: async () => {
      try {
        const {
          account: { dashPayDpa },
        } = walletLib;
        const buser = await dashPayDpa.buser.get(username);
        await buser.synchronize();
        await buser.own(dashPayDpa.getBUserSigningPrivateKey());
        const adorableAvatarUrl = `https://api.adorable.io/avatars/285/${username}.png`;
        const profile = await dashPayDpa.profile.create({
          avatarUrl: avatarUrl || adorableAvatarUrl,
          bio,
        });
        profile.setOwner(buser);
        return profile.register();
      } catch (error) {
        throw new Error(error);
      }
    },
  });
}

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

export const search = (searchString: string) => (dispatch, getState, walletLib) => dispatch({
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
