/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createSelector } from 'reselect';
import { selectCurrency } from 'state';

export default createSelector(selectCurrency, currency => ({ currency }));
