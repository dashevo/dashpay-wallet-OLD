/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { COLORS } from 'constants';

export default StyleSheet.create({
  navbar: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: '100%'
  },
  row: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 48,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    height: 64
  },
  icon: {
    color: COLORS.white,
    fontSize: 22,
    width: 24,
    textAlign: 'center'
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  part1: {
    color: COLORS.white,
    fontSize: 18,
    marginRight: 4,
    opacity: 1
  },
  part2: {
    color: COLORS.white,
    fontSize: 16,
    marginRight: 12,
    opacity: 0.75
  },
  settingsIcon: {
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
