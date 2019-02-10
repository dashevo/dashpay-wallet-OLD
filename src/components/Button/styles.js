/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

import * as vars from '../variables';

export default StyleSheet.create({
  ['container']: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    borderColor: 'red',
    borderRadius: 16,
    borderWidth: 0,
    height: 32,
    justifyContent: 'center',
    position: 'relative',
    paddingLeft: 16,
    paddingRight: 16,
  },
  ['text']: {
    fontSize: 14,
    color: "#fff"
  }
});
