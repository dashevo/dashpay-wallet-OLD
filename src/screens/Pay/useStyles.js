/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { createUseStyles } from 'hooks/Styles';

const useStyles = createUseStyles(theme => ({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  row: {
    alignItems: 'center',
    height: theme.avatarLgSize + 30,
    justifyContent: 'center',
    padding: 10,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    marginTop: -theme.numberPadPadding,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.numberPadButtonColor,
    fontSize: theme.numberPadButtonFontSize,
  },
}));

export default useStyles;
