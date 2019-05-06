/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

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

  // Size ls
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

  // Size sm
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

  // Variant primary
  container__primary: {
    backgroundColor: theme.avatarPrimaryBackgroundColor,
    borderColor: theme.avatarPrimaryBorderColor,
  },
  text__primary: {
    color: theme.avatarPrimaryColor,
  },
  icon__primary: {
    color: theme.avatarPrimaryColor,
  },

  // Variant secondary
  container__secondary: {
    backgroundColor: theme.avatarSecondaryBackgroundColor,
    borderColor: theme.avatarSecondaryBorderColor,
  },
  text__secondary: {
    color: theme.avatarSecondaryColor,
  },
  icon__secondary: {
    color: theme.avatarSecondaryColor,
  },

  // Avatar Cover ***
  container__cover: {
    borderRadius: theme.avatarCoverBorderRadius,
    height: theme.avatarCoverHeight,
    width: theme.avatarCoverWidth,
  },
  image__cover: {
    borderRadius: theme.avatarCoverBorderRadius,
    height: theme.avatarCoverHeight,
    width: theme.avatarCoverWidth,
  },
  text__cover: {
    fontSize: theme.avatarCoverFontSize,
  },
  icon__cover: {
    fontSize: theme.avatarCoverFontSize,
  },
});

export default makeStyles(styles);
