/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  progress: {
    width: 240,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#046FC1'
  },
  bar: {
    backgroundColor: '#fff',
    width: 240,
    height: 10,
    transform: [
      {
        scaleX: 0.75
      },
      {
        translateX: -50
      }
    ]
  }
});

export default styles;
