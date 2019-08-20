/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { createUseStyles } from 'hooks/Styles';

const useStyles = createUseStyles(theme => ({
  row: {
    backgroundColor: theme.white,
    borderColor: theme.white,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  left: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 70,
  },
  body: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  icon: {
    fontWeight: '500',
    color: '#000',
    fontSize: 15,
  },
  text: {
    color: '#333',
    fontSize: 13,
  },
  'row.active': {
    backgroundColor: theme.numberPadBackgroundColor,
    borderColor: theme.numberPadBackgroundColor,
  },
  'icon.active': {
    color: theme.white,
  },
  'text.active': {
    color: theme.white,
  },
}));

export default useStyles;
