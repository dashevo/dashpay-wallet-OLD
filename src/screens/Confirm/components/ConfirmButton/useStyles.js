/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  confirmButtonInner: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 28,
    padding: 3,
  },
  container: {
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderColor: 'rgba(0, 0, 0, 0.25)',
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
  feedback: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 25,
    borderWidth: 0,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
  feedbackText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default makeStyles(styles);
