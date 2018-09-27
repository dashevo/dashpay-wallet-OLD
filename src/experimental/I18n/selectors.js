/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createSelector } from 'reselect';
import { selectLanguage } from 'state';

const selector = createSelector(selectLanguage, locale => ({ locale }));

export default selector;
