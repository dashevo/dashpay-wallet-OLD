/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

export default StyleSheet.create({
  input: {
    backgroundColor: THEMES.vivid.foreground,
    width: 300,
  },
  error: {
    borderColor: 'red',
    borderWidth: 2,
  }
});
