/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { CHANGE_LOCALE } from './constants';

export const changeLocale = locale => ({
  type: CHANGE_LOCALE,
  locale
});
