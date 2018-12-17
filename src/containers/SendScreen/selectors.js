/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createSelector } from "reselect";
import { selectAlternativeCurrency } from "state";

const selector = createSelector(selectAlternativeCurrency, alternativeCurrency => alternativeCurrency);

export default selector;
