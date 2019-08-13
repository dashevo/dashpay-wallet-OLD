import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    paddingBottom: 64,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 64,
  },
  title: {
    color: '#222222',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 32,
    textAlign: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 24,
  },
  dashLogo: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    height: 60,
  },
});

export default styles;
