import { createSelector } from 'reselect';
import { accountSelector } from 'state/account/selectors';

export default createSelector(
  accountSelector,
  ({ username }) => ({ username }),
);
