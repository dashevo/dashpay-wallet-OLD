import { createSelector } from 'reselect';
import { currentUserSelector } from 'state/account/selectors';
import { currentProfileSelectorFactory } from 'state/profiles/selectors';

export default createSelector(
  currentUserSelector,
  currentProfileSelectorFactory,
  (cachedUser, currentProfileSelector) => {
    const { username } = cachedUser;
    const user = currentProfileSelector(username) || cachedUser;
    return {
      user,
    };
  },
);
