import { createSelector } from 'reselect';
import { accountSelector } from 'state/account/selectors';

export default createSelector(
  accountSelector,
  ({ isRegisterRequestSent, username }) => ({
    username,
    isSubmitting: isRegisterRequestSent,
  }),
);
