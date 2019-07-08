// @flow
import {
  PROFILES_REGISTER_ASYNC,
  PROFILES_SEARCH_ASYNC,
} from 'state/action-types';

export const register = (
  avatar: ?string,
  bio: ?string,
  username: string,
) => (
  dispatch, getState, { account: { dashPayDap } },
) => dispatch({
  types: PROFILES_REGISTER_ASYNC,
  asyncTask: async () => {
    const buser = await dashPayDap.buser.get(username);
    await buser.synchronize();
    await buser.own(dashPayDap.getBUserSigningPrivateKey());
    const profile = await dashPayDap.profile.create({
      avatar,
      bio,
    });
    profile.setOwner(buser);
    return profile.register();
  },
});

export const search = (searchString: string) => (
  dispatch, getState, { account: { dashPayDap } },
) => dispatch({
  searchString,
  types: PROFILES_SEARCH_ASYNC,
  // TODO: replace when we have username
  // asyncTask: () => dashPayDap.profile.get(searchString),
  asyncTask: async () => {
    const profiles = await dashPayDap.profile.getAll();
    return Promise.all(profiles.map(async (profile) => {
      const regTxId = profile.$meta.userId;
      const bUser = await dashPayDap.buser.get(regTxId);
      return {
        ...profile,
        bUser,
      };
    }));
  },
});
