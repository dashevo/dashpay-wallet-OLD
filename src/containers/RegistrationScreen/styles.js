import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEMES.vivid.background,
  },
  row: {
    height: 80,
    width: 300,
    alignItems: 'center',
  },
  header: {
    color: THEMES.vivid.foreground,
    fontSize: 30,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  validationError: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    color: THEMES.vivid.foreground,
  },
  button: {
    color: THEMES.vivid.foreground,
  },
});

export default styles;
