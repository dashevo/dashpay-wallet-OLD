/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { COLORS } from 'constants';
import { LENGTHS } from 'constants';
// import { THEMES } from 'constants';

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: COLORS.blueDark,
    flexDirection: 'column',
    padding: LENGTHS.screenPadding,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    flex: 1,
  },
  avatarContainer: {
    marginHorizontal: 'auto',
    padding: 10,
    borderRadius: 55,
    backgroundColor: COLORS.white,
  },
  titleText: {
  },
  fiatBeforeFee: {
  },
  inset: {
  },
  insetHeader: {
  },
  insetValue: {
  },
  footer: {
  },
  swipeArea: {
    flexDirection: 'row',
  }
});

export default styles;
