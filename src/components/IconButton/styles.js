/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const styles = (theme) => StyleSheet.create({
  highlight: {
    padding: '5%',
    flexBasis: 0,
    flexGrow: 1
  },
  container: {
    alignItems: 'center',
    backgroundColor: theme.background
  },
  image: {
    height: 25,
    width: 35,
    resizeMode: 'contain'
  },
  text: {
    color: theme.foreground
  }
});

export default styles;
