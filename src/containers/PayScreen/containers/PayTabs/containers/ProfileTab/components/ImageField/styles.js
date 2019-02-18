/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ['row']: {
    paddingTop: 32,
    paddingBottom: 32,
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ['container']: {
    alignItems: 'center',
    position: 'relative',
    borderRadius: 48,
    borderWidth: 0,
    height: 96,
    justifyContent: 'center',
    width: 96
  },
  ['body']: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 48,
    borderWidth: 0,
    height: 96,
    width: 96,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  ['right']: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  ['image']: {
    borderRadius: 48,
    borderWidth: 0,
    height: 96,
    width: 96
  },
  ['text']: {
    color: '#fff',
    fontSize: 32
  },
  ['colorPicker']: {
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 0,
    height: 32,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderColor: 'red',
    width: 32
  }
});

export default styles;
