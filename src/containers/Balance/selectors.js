/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createSelector } from 'reselect';
import { selectSettings } from 'state';

export default createSelector(
  selectSettings, ({ balanceVisible }) => ({ balanceVisible })
);
