import { createSelector } from 'reselect';
import { usernameSelector } from 'state/account/selectors';

export default createSelector(
  usernameSelector,
  name => ({ user: { name } }),
);
