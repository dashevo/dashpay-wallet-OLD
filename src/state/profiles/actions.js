// @flow
import {
  PROFILES_REGISTER_ASYNC,
  PROFILES_SEARCH_ASYNC,
  PROFILES_GET_BY_BUSERNAME_ASYNC,
} from 'state/action-types';

export const registerProfile = ({
  avatarUrl,
  bio,
  username,
}) => (
  dispatch, getState, { account: { dashPayDpa } },
) => dispatch({
  types: PROFILES_REGISTER_ASYNC,
  asyncTask: async () => {
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
  },
});

export const getByBUsername = (username: string) => (
  dispatch, getState, { account: { dashPayDpa } },
) => dispatch({
  types: PROFILES_GET_BY_BUSERNAME_ASYNC,
  asyncTask: () => dashPayDpa.profile.getByBUsername(username),
});

export const search = (searchString: string) => (
  dispatch, getState, { account: { dashPayDpa } },
) => dispatch({
  searchString,
  types: PROFILES_SEARCH_ASYNC,
  // TODO: replace when we have search by username
  // asyncTask: () => dashPayDpa.profile.get(searchString),
  asyncTask: async () => {
    const getProfiles = await dashPayDpa.profile.getAll();
    return Promise.all(getProfiles);
  },
});
