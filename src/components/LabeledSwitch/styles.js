/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants/theming';

const theme = THEMES.vivid;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  text: {
    color: theme.foreground,
    margin: 5,
    flex: 1,
  },
});

export default styles;
