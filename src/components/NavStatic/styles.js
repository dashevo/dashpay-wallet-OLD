/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  ['container']: {
    height: theme.navbarContainerHeight,
    paddingRight: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderColor: "transparent",
  },
  ['button']: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: theme.navbarContainerHeight,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ['text']: {
    color: theme.navbarTextColor,
    fontSize: theme.navbarTextFontSize,
    fontWeight: theme.navbarTextFontWeight,
    lineHeight: theme.navbarTextLineHeight,
    marginLeft: 4,
  },
  ['icon']: {
    color: theme.navbarIconColor,
    fontSize: theme.navbarIconFontSize,
    fontWeight: theme.navbarIconFontWeight,
    lineHeight: theme.navbarIconLineHeight,
  },
});

export default styles;
