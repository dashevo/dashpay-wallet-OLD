/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = theme => ({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 25,
    borderWidth: 0,
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  text: {
    color: 'white',
    marginLeft: 8,
    marginRight: 8,
    textAlign: 'center',
  },
});

export default makeStyles(styles);
