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
    backgroundColor: THEMES.vivid.background,
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    height: '20%',
    resizeMode: 'contain',
    width: '40%'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    width: 300,
    minWidth: '50%'
  }
});

export default styles;
