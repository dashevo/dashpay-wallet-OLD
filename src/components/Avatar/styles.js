/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  ['container']: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 68,
    borderStyle: 'solid',
    borderWidth: 0,
    flexDirection: 'column',
    height: 136,
    justifyContent: 'center',
    minWidth: 0,
    position: 'relative',
    width: 136
  },
  ['body']: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.avatarContainerBackgroundColor,
    borderColor: theme.avatarContainerBorderColor,
    borderRadius: 48,
    height: 96,
    width: 96
  },
  ['image']: {
    borderRadius: 48,
    height: 96,
    width: 96
  },
  ['title']: {
    color: theme.avatarTitleColor,
    fontSize: 24,
    textAlign: 'center'
  },
  ['text']: {
    color: theme.avatarTextColor,
    fontSize: 18,
    textAlign: 'center'
  },
  ['icon']: {
    color: theme.avatarIconColor,
    fontSize: 18,
    textAlign: 'center'
  },
  ['dash']: {
    color: theme.avatarIconColor,
    fontSize: 32,
    textAlign: 'center'
  },
  ['left']: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.avatarContainerBackgroundColor,
    borderColor: theme.avatarContainerBorderColor,
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    top: 50
  },
  ['center']: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  ['container__sm']: {
    borderRadius: 20,
    height: 40,
    width: 40
  },
  ['body__sm']: {
    borderRadius: 20,
    height: 40,
    width: 40
  },
  ['image__sm']: {
    borderRadius: 20,
    height: 40,
    width: 40
  },
  ['dash__sm']: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default styles;
