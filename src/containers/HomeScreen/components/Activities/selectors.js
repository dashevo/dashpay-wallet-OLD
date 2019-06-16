import { createSelector } from 'reselect';
import { receivedRequestsSelector } from 'state/contacts/selectors';
import { selectTransactions } from 'state/transactions';

export default createSelector(
  selectTransactions,
  receivedRequestsSelector,
  (transactions, receivedContactRequests) => {
    const activity = [
      ...transactions.map(data => ({ type: 'wallet', data })),
      ...receivedContactRequests.map(data => ({ type: 'social', data })),
    ].sort((a, b) => b.data.timestamp - a.data.timestamp);

    return {
      activity,
    };
  },
);
