/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { createUseStyles } from 'hooks/Styles';

const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: theme.numberPadBackgroundColor,
    borderColor: theme.numberPadBackgroundColor,
    padding: theme.numberPadPadding,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
}));

export default useStyles;
