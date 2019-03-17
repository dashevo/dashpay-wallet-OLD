/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const styles = StyleSheet.create({
  highlight: {
    padding: '5%',
    flexBasis: 0,
    flexGrow: 1
  },
  container: {
    alignItems: 'center'
  },
  icon: {
    fontSize: 21,
    marginBottom: 5,
    color: THEMES.vivid.foreground
  },
  text: {
    color: THEMES.vivid.foreground
  }
});

export default styles;
