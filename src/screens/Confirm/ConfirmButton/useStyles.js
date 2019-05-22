/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 50,
    position: 'relative',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    overflow: 'hidden',
    borderRadius: 25,
  },
});

export default makeStyles(styles);
