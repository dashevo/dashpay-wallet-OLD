/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: THEMES.vivid.background,
    justifyContent: 'center',
    flex: 1
  },
  text: {
    justifyContent: 'center'
  },
  debugger: {
    color: THEMES.vivid.foreground,
    marginTop: 12,
    fontSize: 12
  }
});

export default styles;
