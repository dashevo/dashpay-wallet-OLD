/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants/theming';

const styles = StyleSheet.create({
  highlight: {
    padding: '5%',
    flexBasis: 0,
    flexGrow: 1
  },
  container: {
    alignItems: 'center'
  },
  image: {
    height: 25,
    width: 35,
    resizeMode: 'contain'
  },
  text: {
    color: THEMES.vivid.foreground
  }
});

export default styles;
