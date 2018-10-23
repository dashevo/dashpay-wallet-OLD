/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { CHANGE_SETTINGS } from 'state/settings/constants';
import { changeSettings } from 'state';

describe('settings actions', () => {
  it('should create an action to set the new settings', () => {
    const settings = { balanceVisible: true }
    const expectedAction = {
      settings,
      type: CHANGE_SETTINGS,
    };
    expect(changeSettings(settings)).toEqual(expectedAction);
  });
});
