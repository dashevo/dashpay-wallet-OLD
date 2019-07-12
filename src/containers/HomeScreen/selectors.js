import { createSelector } from 'reselect';
import { currentUserSelector } from 'state/account/selectors';
import { profileSelectorFactory } from 'state/profiles/selectors';

export default createSelector(
  currentUserSelector,
  profileSelectorFactory,
  (cachedUser, currentProfileSelector) => {
    const { username } = cachedUser;
    const user = currentProfileSelector(username) || cachedUser;
    return {
      user,
    };
  },
);
