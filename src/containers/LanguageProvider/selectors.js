/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { selectLocale } from 'state';

export default createSelector(selectLocale, locale => ({ locale }));
