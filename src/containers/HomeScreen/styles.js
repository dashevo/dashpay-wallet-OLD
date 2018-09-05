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
    justifyContent: 'flex-start',
    backgroundColor: THEMES.vivid.background
  },
  logo: {
    width: '40%',
    height: '20%',
    resizeMode: 'contain',
  },
  heading: {
    color: THEMES.vivid.foreground,
    fontSize: 24,
    textAlign: 'center'
  }
});

export default styles;
