/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createSelector } from 'reselect';
import { selectAlternativeCurrency } from 'state';
import { selectOngoingTransaction } from 'state';

const selector = createSelector(
  [selectAlternativeCurrency, selectOngoingTransaction],
  (alternativeCurrency, initialValues) => {
    return {
      alternativeCurrency,
      initialValues
    };
  }
);

export default selector;
