/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { COLORS, LENGTHS } from 'constants';

  // borderRadius: 10,
  // navBarHeight: 64,
  // fontSize: 16,
  // headingFontSize: 48,
  // screenPadding: 16

export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  header: {
    padding: LENGTHS.screenPadding,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: LENGTHS.headingFontSize
  },
  dummyPage: {
    backgroundColor: 'gray',
    flex: 1,
  }
});
