/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
import { selectTransactions } from 'state/transactions';

function mapStateToProps(state, props) {
  let requests = [...state.contacts.blockchain.requests];
  let transactions = selectTransactions(state);

  let activity = transactions.map(item => ({type: 'wallet', data: item, time: item.timestamp}));

  activity = activity.concat(
    requests.map(item => ({type: 'social', data: item, time: 0}))
  );
  activity = activity.sort((a,b) => a.time > b.time ? -1 : 1) // descending by time

  return {
    activity
  };
}

export default mapStateToProps;
