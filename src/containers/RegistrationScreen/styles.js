/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
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
    justifyContent: 'center',
    color: THEMES.vivid.foreground,
  },
  input:{
    backgroundColor: 'white',
    width: 200,
    margin: 20,
  }
});

export default styles;
