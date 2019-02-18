/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { selectAlternativeCurrency } from 'state';

export default createSelector(
  selectAlternativeCurrency, ({ code }) => ({ currentAlternativeCurrencyCode: code })
);
