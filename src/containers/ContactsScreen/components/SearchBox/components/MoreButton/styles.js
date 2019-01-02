/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ['slideInRight']: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0
  },
  ['touchable']: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 16,
    borderWidth: 0,
    marginLeft: 16,
    marginRight: 16
  },
  ['container']: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 16,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2
  },
  ['text']: {
    fontSize: 11,
    color: '#088BE2'
  }
});
