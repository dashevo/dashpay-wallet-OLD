/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  ['tmp']: {
    backgroundColor: 'black',
    borderColor: 'black',
    marginTop: 15
  },
  ['container']: {
    backgroundColor: theme.backgroundColor,
    borderColor: theme.borderColor,
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'column',
    minWidth: 0,
    position: 'relative',
  },
  ['header']: {
    backgroundColor: theme.backgroundColor,
    borderColor: theme.borderColor,
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12
  },
  ['body']: {
    backgroundColor: theme.backgroundColor,
    borderColor: theme.borderColor,
    borderStyle: 'solid',
    borderWidth: 0,
    padding: 20
  },
  ['footer']: {
    backgroundColor: theme.backgroundColor,
    borderColor: theme.borderColor,
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12
  },
  ['row']: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-start'
  },
  ['col']: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: 20
  },
  ['highlighted']: {
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    padding: 12
  },
  ['title']: {
    color: theme.color,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    marginBottom: 3,
    marginTop: 0
  },
  ['subtitle']: {
    color: theme.color,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    marginBottom: 0,
    marginTop: 0
  },
  ['text']: {
    color: theme.color,
    fontSize: 18,
    textAlign: 'left'
  },
  ['small']: {
    color: theme.color,
    fontSize: 10,
    fontWeight: '400'
  },
  ['icon']: {
    color: theme.color,
    fontSize: 18,
    textAlign: 'center',
    width: 24
  }
});

export default styles;
