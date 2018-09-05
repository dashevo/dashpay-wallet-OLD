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
    flex: 1,
    justifyContent: 'center',
    backgroundColor: THEMES.vivid.background,
  },
  heading: {
    color: THEMES.vivid.foreground,
    fontSize: 24,
    textAlign: 'center'
  }
});

export default styles;
