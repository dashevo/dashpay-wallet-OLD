/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from 'react-native';
import { COLORS } from 'constants';
// import { THEMES } from 'constants';
// import { LENGTHS } from 'constants';

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: COLORS.blueDark,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    flex: 1,
  },
  avatarContainer: {
    marginTop: -50,
    marginHorizontal: 'auto',
    width: 110,
    padding: 10,
    borderRadius: 55,
    backgroundColor: COLORS.white,
  },

});

export default styles;
