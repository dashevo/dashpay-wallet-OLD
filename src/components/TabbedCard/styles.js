/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { COLORS } from 'constants';

export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  header: {
  },
  dummyPage: {
    backgroundColor: 'gray',
    flex: 1,
  }
});
