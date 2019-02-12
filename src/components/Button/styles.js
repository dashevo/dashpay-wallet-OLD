/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  ['container']: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.btnContainerBackgroundColor,
    borderColor: theme.btnContainerBackgroundColor,
    borderRadius: 25,
    borderWidth: 0,
    height: 50,
    justifyContent: 'center',
    position: 'relative',
    paddingLeft: 32,
    paddingRight: 32
  },
  ['text']: {
    color: theme.btnTextColor,
    fontSize: 16
  },
  ['container__sm']: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 32
  },
  ['text__sm']: {
    fontSize: 14
  }
});

export default styles;
