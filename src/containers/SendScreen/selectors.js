/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createSelector } from "reselect";
import { selectRate } from "state";

const selector = createSelector(selectRate, rate => ({ rate }));

export default selector;
