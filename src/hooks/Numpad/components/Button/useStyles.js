/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { createUseStyles } from 'hooks/Styles';

const useStyles = createUseStyles(theme => ({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },
  text: {
    color: theme.numberPadButtonColor,
    fontSize: theme.numberPadButtonFontSize,
  },
}));

export default useStyles;
