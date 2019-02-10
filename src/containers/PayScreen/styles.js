/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ['container']: {
    position: 'relative',
    flex: 1
  },
  ['name']: {
    fontWeight: '300',
    color: '#fff',
    fontSize: 24
  },
  ['scrollView']: {
    backgroundColor: '#088BE2',
    paddingTop: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden',
    flex: 1
  },
  ['header']: {
    position: 'relative',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  ['body']: {
    flex: 1
  },
  ['row']: {
    alignSelf: 'stretch'
  },
  ['dash']: {
    width: 76,
    height: 76,
    borderRadius: 38,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  ['dashWrap']: {
    width: 76,
    height: 76,
    borderRadius: 38,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)'
  },
  ['footer']: {
    alignSelf: 'stretch'
  }
});

export default styles;
