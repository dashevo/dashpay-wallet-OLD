/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { createUseStyles } from 'hooks/Styles';

const useStyles = createUseStyles(() => ({
  row: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  left: {
    flex: 1,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    color: '#999',
  },
  icon: {
    fontSize: 14,
    color: '#999',
    lineHeight: 14,
  },
  value: {
    fontSize: 24,
    color: '#999',
  },
  square: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
  'name.active': {
    color: '#000',
  },
  'icon.active': {
    color: '#000',
  },
  'value.active': {
    color: '#000',
  },
}));

export default useStyles;
