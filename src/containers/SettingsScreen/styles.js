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
  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 20,
    color: THEMES.vivid.foreground,
  },
  text: {
    color: THEMES.vivid.foreground,
    fontWeight: 'bold',
    marginTop: 12
  },
  debugger: {
    color: THEMES.vivid.foreground,
    marginTop: 12,
    fontSize: 12
  }
});

export default styles;
