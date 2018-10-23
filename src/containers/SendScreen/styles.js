/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';
import { LENGTHS } from 'constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: THEMES.vivid.background,
    justifyContent: 'center',
    flex: 1
  },
  header: {
    height: LENGTHS.navBarHeight
  },
  body: {
    borderTopLeftRadius: LENGTHS.borderRadius,
    borderTopRightRadius: LENGTHS.borderRadius
  },
  text: {
    justifyContent: 'center'
  },
  amountField:{
    backgroundColor: THEMES.vivid.foreground,
    width:60
  }
});

export default styles;
