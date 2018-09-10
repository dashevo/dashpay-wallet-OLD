/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants/theming';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    resizeMode: 'contain',
    height: 64,
    width: 320,
    marginBottom: 0,
    marginTop: 0
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 0,
    marginTop: 0,
    width: 300,
    minWidth: '50%'
  },
  avatar: {
    position: 'relative',
    width: 100,
    height: 100,
    marginBottom: 32,
    marginTop: 32
  },
  // Tmp
  badgeWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 32,
    height: 32
  },
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderColor: '#0182E1',
    borderRadius: 16,
    borderWidth: 2,
    width: 32,
    height: 32
  },
  badgeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default styles;
