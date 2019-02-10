/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ['column']: {
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  ['row']: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 45 / 2,
    borderWidth: 1,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    height: 45,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    position: 'relative'
  },
  ['body']: {
    flex: 1
  },
  ['right']: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0
  },
  ['input']: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 45 / 2,
    borderWidth: 0,
    textAlign: 'center',
    color: '#999',
    flex: 1,
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
    height: 45
  }
});
