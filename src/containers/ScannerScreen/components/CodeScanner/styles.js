/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ['container']: {
    backgroundColor: '#000',
    borderColor: '#000',
    flex: 1
  },
  ['camera']: {
    flex: 1
  },
  ['row']: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0
  },
  ['rowWithMask']: {
    flexDirection: 'row'
  },
  ['col']: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderColor: 'rgba(0, 0, 0, 0.25)',
    flexGrow: 1,
    flexShrink: 0
  },
  ['mask']: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: 250,
    width: 250,
    flexGrow: 1,
    flexShrink: 0
  }
});
