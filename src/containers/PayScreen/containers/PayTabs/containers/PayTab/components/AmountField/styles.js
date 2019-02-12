/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  ['container']: {
    alignItems: 'center',
    backgroundColor: theme.fieldContainerBackgroundColor,
    borderColor: theme.fieldContainerBorderColor,
    borderRadius: 0,
    borderWidth: 0,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: 1,
  },
  ['separator']: {
    backgroundColor: theme.fieldSeparatorBackgroundColor,
    borderColor: theme.fieldSeparatorBorderColor,
    height: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  ['body']: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  ['right']: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
    paddingRight: 6
  },
  ['input']: {
    backgroundColor: theme.fieldInputBackgroundColor,
    borderColor: theme.fieldInputBorderColor,
    borderRadius: 24,
    borderWidth: 0,
    color: theme.fieldInputColor,
    flex: 1,
    fontSize: 26,
    fontWeight: '100',
    height: 50,
    lineHeight: 30,
    paddingBottom: 10,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 10,
    textAlign: 'center'
  },
  ['text']: {
    color: theme.fieldIconColor,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20
  },
  ['icon']: {
    color: theme.fieldIconColor,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20
  }
});

export default styles;
