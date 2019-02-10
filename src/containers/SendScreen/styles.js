/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ['container']: {
    flex: 1
  },
  ['scrollView']: {
    backgroundColor: '#088BE2',
    paddingTop: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden',
    flex: 1
  },
  header: {
    position: 'relative',
    backgroundColor: '#088BE2',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  ['body']: {
    backgroundColor: '#fff',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 128,
    padding: 24
  },
  ['row']: {
    alignSelf: 'stretch'
  },
  ['dash']: {
    width: 64,
    height: 64,
    borderRadius: 32,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 24
  },
  ['footer']: {
    alignSelf: 'stretch'
  }
});

export default styles;
