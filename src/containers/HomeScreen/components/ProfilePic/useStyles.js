import { createUseStyles } from 'hooks/Styles';

const styles = () => ({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 21,
    color: '#fff',
  },
  row: {
    marginBottom: 16,
  },
});

export default createUseStyles(styles);
