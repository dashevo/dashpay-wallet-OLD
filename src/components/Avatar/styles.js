/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  ['container']: {
    backgroundColor: theme.backgroundColor,
    borderColor: theme.borderColor,
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'column',
    minWidth: 0,
    position: 'relative',
    marginTop: 15
  },
  ['image']: {
    height: 76,
    width: 76
  },
  ['text']: {
    color: theme.color,
    fontSize: 18,
    textAlign: 'left'
  },
  ['icon']: {
    color: theme.color,
    fontSize: 18,
    textAlign: 'center',
    width: 24
  }
});

export default styles;
