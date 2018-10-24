/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';
import { LENGTHS } from 'constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: THEMES.dark.background,
    justifyContent: 'center',
    flex: 1
  },
  header: {
    height: LENGTHS.navBarHeight
  },
  scrollBody: {
    width: '100%'
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: THEMES.light.background,
    borderTopLeftRadius: LENGTHS.borderRadius,
    borderTopRightRadius: LENGTHS.borderRadius,
    padding: LENGTHS.screenPadding
  },
  section: {
    alignSelf: "stretch",
    paddingTop: LENGTHS.screenPadding,
    paddingBottom: LENGTHS.screenPadding,
    width: '100%',
    justifyContent: 'center'
  },
  text: {
    color: THEMES.light.foreground,
    fontSize: LENGTHS.fontSize
  },
  heading: {
    fontSize: LENGTHS.headingFontSize,
    margin: LENGTHS.screenPadding
  },
  amountField:{
    backgroundColor: THEMES.vivid.foreground,
    flex: 1
  }
});

export default styles;
