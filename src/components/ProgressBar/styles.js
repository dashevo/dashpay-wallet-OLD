/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  progress: {
    width: 240,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#046FC1'
  },
  progressBar: {
    backgroundColor: '#fff',
    width: 240,
    height: 10
    // transform: [
    //   {
    //     translateX: 0
    //   },
    //   {
    //     scaleX: 0.0001
    //   }
    // ]
  }
});

export default styles;
