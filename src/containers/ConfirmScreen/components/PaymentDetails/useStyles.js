/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  container: {
    backgroundColor: 'transparent',
    padding: 14,
  },
  row: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  subheading: {
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.75)',
  },
  divider: {
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  icon: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 21,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 21,
  },
  heading: {
    textAlign: 'center',
    fontSize: 50,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 50,
  },
  text: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.75)',
  },
});

export default makeStyles(styles);
