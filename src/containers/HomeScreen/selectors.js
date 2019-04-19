/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { selectUsername } from 'state/account';

export default createSelector(
  selectUsername,
  name => ({ user: { name } }),
);
