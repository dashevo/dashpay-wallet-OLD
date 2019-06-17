/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { createUseStyles } from 'hooks/Styles';

const styles = theme => ({
  container: {
    alignItems: 'center',
    backgroundColor: theme.avatarBackgroundColor,
    borderColor: theme.avatarBorderColor,
    borderRadius: theme.avatarBorderRadius,
    borderWidth: theme.avatarBorderWidth,
    color: theme.avatarColor,
    display: 'flex',
    flexShrink: 0,
    fontSize: theme.avatarFontSize,
    height: theme.avatarSize,
    justifyContent: 'center',
    position: 'relative',
    width: theme.avatarSize,
  },
  image: {
    borderRadius: theme.avatarBorderRadius,
    height: theme.avatarSize,
    resizeMode: 'cover',
    width: theme.avatarSize,
  },
  text: {
    color: theme.avatarColor,
    fontSize: theme.avatarFontSize,
  },
  icon: {
    color: theme.avatarColor,
    fontSize: theme.avatarFontSize,
  },
  container__lg: {
    borderRadius: theme.avatarLgBorderRadius,
    height: theme.avatarLgSize,
    width: theme.avatarLgSize,
  },
  image__lg: {
    borderRadius: theme.avatarLgBorderRadius,
    height: theme.avatarLgSize,
    width: theme.avatarLgSize,
  },
  text__lg: {
    fontSize: theme.avatarLgFontSize,
  },
  icon__lg: {
    fontSize: theme.avatarLgFontSize,
  },
  container__sm: {
    borderRadius: theme.avatarSmBorderRadius,
    height: theme.avatarSmSize,
    width: theme.avatarSmSize,
  },
  image__sm: {
    borderRadius: theme.avatarSmBorderRadius,
    height: theme.avatarSmSize,
    width: theme.avatarSmSize,
  },
  text__sm: {
    fontSize: theme.avatarSmFontSize,
  },
  icon__sm: {
    fontSize: theme.avatarSmFontSize,
  },
});

export default createUseStyles(styles);
