/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ['column']: {
    alignSelf: 'stretch'
  },
  ['row']: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'space-between'
  },
  ['input']: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 0,
    color: '#053273',
    flex: 1,
    fontSize: 21,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 15,
    textAlign: 'right'
  }
});
