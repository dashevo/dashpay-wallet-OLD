import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderColor: '#fff',
    flex: 1,
  },
  body: {
    paddingBottom: 64,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 64,
  },
  title: {
    color: '#222222',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 32,
    textAlign: 'center',
  },
  dashLogo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  row: {
    height: 60,
  },
});

export default styles;
