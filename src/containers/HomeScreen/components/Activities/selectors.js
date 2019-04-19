// @flow
import { createSelector } from 'reselect';
import { receivedContactRequestsSelector } from 'state/contacts/selectors';
import { selectTransactions } from 'state/transactions';

export default createSelector(
  selectTransactions,
  receivedContactRequestsSelector,
  (transactions, receivedContactRequests) => {
    let activity = transactions.map(item => ({ type: 'wallet', data: item, time: item.timestamp }));

    activity = activity.concat(
      receivedContactRequests.map(item => ({ type: 'social', data: item, time: new Date() })),
    );
    activity = activity.sort((a, b) => b.time - a.time);

    return {
      activity,
    };
  },
);
