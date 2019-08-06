import { createUseStyles } from 'hooks/Styles';

const styles = theme => ({
  username: {
    fontSize: theme.fontSizeLg,
  },
  usernameRow: {
    padding: 32,
  },
  row: {
    alignSelf: 'stretch',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingBottom: 15,
    paddingTop: 200,
    flexGrow: 1,
  },
  mostFrequentBody: {

  },
  contactBody: {

  },
});

export default createUseStyles(styles);
