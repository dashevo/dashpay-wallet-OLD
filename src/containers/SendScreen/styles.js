/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: THEMES.vivid.background,
    justifyContent: 'center',
    flex: 1
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
