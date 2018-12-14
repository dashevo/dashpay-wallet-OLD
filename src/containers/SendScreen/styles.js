/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ['container']: {
    flex: 1
  },
  ['scrollView']: {
    backgroundColor: 'red',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden',
    flex: 1
  },
  header: {
    position: 'relative',
    backgroundColor: '#088BE2',
    // borderTopLeftRadius: 6,
    // borderTopRightRadius: 6,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  avatarView: {
    width: 64,
    height: 64,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 24
  },
  avatarImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  avatarLeft: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: 24,
    minHeight: 24,
    bottom: '4%',
    left: '4%'
  },
  avatarButton: {
    backgroundColor: 'red',
    width: 24,
    height: 24,
    borderRadius: 12,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  touchableOpacity: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    right: 0,
    top: 0
  },
  text: {
    color: '#fff',
    fontSize: 11
  },
  heading: {
    fontSize: 32,
    fontWeight: '100',
    textAlign: 'center',
    // marginTop: 15,
    marginBottom: 15
  },
  buttonGroup: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'blue',
    borderRadius: 0,
    borderColor: 0,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonActive: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'blue',
    borderRadius: 0,
    borderColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 13
  },
  body: {
    backgroundColor: '#fff',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 128,
    padding: 24
  },
  footer: {
    backgroundColor: '#fff'
  },
  row: {
    alignSelf: 'stretch'
  },
  dash: {
    width: 64,
    height: 64,
    borderRadius: 32,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 24
  }
});

export default styles;
