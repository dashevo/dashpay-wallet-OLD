/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { createSelector } from "reselect";

export const selectState = state => {
  const { unusedAddress } = state.user;
  return {unusedAddress}
};

const selector = createSelector(selectState, obj => obj);

export default selector;
