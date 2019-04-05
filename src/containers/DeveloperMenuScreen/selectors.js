/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { createSelector } from 'reselect';
import { selectMnemonic, selectUsername } from 'state';

export default createSelector(
  selectMnemonic,
  selectUsername,
  (mnemonic, username) => ({
    mnemonic,
    username
  }),
);
