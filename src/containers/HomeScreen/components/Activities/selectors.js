/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { selectRequests } from 'state/transactions';
import { selectTransactions } from 'state/transactions';

export default createSelector(
  selectTransactions,
  selectRequests,
  (transactions, requests) => {
    let activity = transactions.map(item => ({type: 'wallet', data: item, time: item.timestamp}));

    activity = activity.concat(
      requests.map(item => ({type: 'social', data: item, time: new Date}))
    );
    activity = activity.sort((a, b) => b.time - a.time);

    return {
      activity
    };
  }
);
