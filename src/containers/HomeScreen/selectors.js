/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from "reselect";
import { selectLanguage } from "state";
import { selectBalance } from "state";

const selector = createSelector(
  [selectLanguage, selectBalance],
  (language, balance) => ({
    language,
    balance
  })
);

export default selector;
