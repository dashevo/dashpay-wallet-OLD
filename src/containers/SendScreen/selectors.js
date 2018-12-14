/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createSelector } from 'reselect';
import { selectOngoingTransaction } from 'state';

const selector = createSelector([selectOngoingTransaction], initialValues => {
  return {
    initialValues
  };
});

export default null;
