// @flow
import {
  PROFILES_REGISTER_ASYNC,
  PROFILES_SEARCH_ASYNC,
} from 'state/action-types';

export const register = (
  avatarUrl: ?string,
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
    const adorableAvatarUrl = `https://api.adorable.io/avatars/285/${username}.png`;
    const profile = await dashPayDap.profile.create({
      avatarUrl: avatarUrl || adorableAvatarUrl,
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
    const getProfiles = await dashPayDap.profile.getAll();
    return Promise.all(getProfiles);
  },
});
