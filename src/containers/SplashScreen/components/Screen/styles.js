/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';
import { LENGTHS } from 'constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#088BE2',
    justifyContent: 'center',
    flex: 1
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
  reanimatable: {
    opacity: 0,
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formattedText: {
    color: 'red'
  }
});
