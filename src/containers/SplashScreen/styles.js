/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  heading: {
    color: '#333333',
    fontSize: 24,
    textAlign: 'center'
  },
  logo: {
    resizeMode: 'contain',
    height: 64,
    width: 320,
    marginBottom: 0,
    marginTop: 0
  },
  progressBar: {
    marginBottom: 32,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
