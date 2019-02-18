/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { selectOngoingTransaction } from 'state';

const selector = createSelector([selectOngoingTransaction], initialValues => {
  return {
    initialValues
  };
});

export default selector;
