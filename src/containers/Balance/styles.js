/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  symbol: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  reanimatableSymbol: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  amount: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1
  },
  reanimatableAmount: {
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flex: 1
  }
});
