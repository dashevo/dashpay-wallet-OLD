/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { DEFAULT_LOCALE } from 'constants';
import { CHANGE_LOCALE } from './constants';

export const initialState = DEFAULT_LOCALE;

const language = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return action.locale;

    default:
      return state;
  }
};

export default language;
