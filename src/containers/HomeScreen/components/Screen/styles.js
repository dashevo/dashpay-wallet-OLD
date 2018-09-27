/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: THEMES.vivid.background,
    justifyContent: 'center',
    flex: 1
  },
  header: {
    height: 70,
    width: '100%'
  },
  reanimatable2: {
    opacity: 0,
    height: 70,
    width: '100%'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    resizeMode: 'contain',
    height: 64,
    width: 320,
    marginBottom: 0,
    marginTop: 0
  },
  reanimatable: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    width: 300,
    minWidth: '50%'
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    marginBottom: 48,
    marginTop: 48,
    width: 100,
    height: 100
  },
  badgeWrapper: {
    opacity: 1,
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
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
    width: 300,
    minWidth: '50%'
  }
});

export default styles;