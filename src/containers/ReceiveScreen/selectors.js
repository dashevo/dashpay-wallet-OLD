/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { createSelector } from "reselect";

export const selectState = state => {
  console.log("____state____", state);
  return {
    address: state.user.address
  }
};

const selector = createSelector(selectState, obj => obj);

export default selector;
