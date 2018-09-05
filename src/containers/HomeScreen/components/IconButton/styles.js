/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants/theming';

const styles = StyleSheet.create({
  Highlight: {
    padding: '5%',
    flexBasis: 0,
    flexGrow: 1
  },
  Container: {
    alignItems: 'center'
  },
  Image: {
    height: 25,
    width: 35,
    resizeMode: 'contain'
  },
  Text: {
    color: THEMES.vivid.foreground
  }
});

export default styles;
