/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ['touchableOpacity']: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ['row']: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4
  },
  ['left']: {
    flex: 1,
    flexDirection: 'row'
  },
  ['flagActive']: {
    opacity: 1
  },
  ['flag']: {
    opacity: 0.5
  },
  ['image']: {
    height: 24,
    borderRadius: 12,
    width: 24,
    opacity: 1,
    marginRight: 4
  }
});
