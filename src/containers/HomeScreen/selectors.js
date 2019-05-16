import { createSelector } from 'reselect';
import { currentUserSelector } from 'state/account/selectors';

export default createSelector(
  currentUserSelector,
  user => ({ user }),
);
