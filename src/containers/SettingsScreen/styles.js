/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants/theming';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: THEMES.vivid.background,
    justifyContent: 'center',
    flex: 1
  },
  heading: {
    fontSize: 20,
    color: THEMES.vivid.foreground,
  },
  text: {
    justifyContent: 'center',
    color: THEMES.vivid.foreground
  }
});

export default styles;
