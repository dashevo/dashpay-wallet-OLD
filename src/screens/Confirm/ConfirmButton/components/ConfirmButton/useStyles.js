/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = theme => ({
  container: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 25,
    borderWidth: 0,
    height: 50,
    position: 'relative',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 25,
    borderWidth: 0,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
    left: 0,
    position: 'absolute',
    top: 0,
  },
  image: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    resizeMode: 'cover',
    height: 50,
    width: 50,
  },
  text: {
    minWidth: 96,
    textAlign: 'center',
  },
});

export default makeStyles(styles);
