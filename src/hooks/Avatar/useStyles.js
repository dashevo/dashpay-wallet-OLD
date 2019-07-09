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
  container__md: {
    borderRadius: theme.avatarMdBorderRadius,
    height: theme.avatarMdSize,
    width: theme.avatarMdSize,
  },
  image__md: {
    borderRadius: theme.avatarMdBorderRadius,
    height: theme.avatarMdSize,
    width: theme.avatarMdSize,
  },
  text__md: {
    fontSize: theme.avatarMdFontSize,
  },
  icon__md: {
    fontSize: theme.avatarMdFontSize,
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
  container__primary: {
    backgroundColor: '#efefef',
    borderColor: '#efefef',
  },
  text__primary: {
    color: '#c0c0c0',
  },
  icon__primary: {
    color: '#c0c0c0',
  },
  container__secondary: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  text__secondary: {
    color: '#cccccc',
  },
  icon__secondary: {
    color: '#cccccc',
  },
});

export default createUseStyles(styles);
