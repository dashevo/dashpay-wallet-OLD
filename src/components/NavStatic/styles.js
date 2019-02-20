/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  ['container']: {
    height: theme.navbarContainerHeight,
    padding: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ['button']: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: theme.navbarContainerHeight,
    paddingBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ['text']: {
    color: theme.navbarTextColor,
    fontSize: theme.navbarTextFontSize,
    fontWeight: theme.navbarTextFontWeight,
    lineHeight: theme.navbarTextLineHeight,
  },
  ['icon']: {
    color: theme.navbarIconColor,
    fontSize: theme.navbarIconFontSize,
    fontWeight: theme.navbarIconFontWeight,
    lineHeight: theme.navbarIconLineHeight,
  },
});

export default styles;
