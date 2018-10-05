/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createSelector } from 'reselect';
import { selectLanguage } from 'state';

const selector = createSelector(selectLanguage, language => ({ language }));

export default selector;
