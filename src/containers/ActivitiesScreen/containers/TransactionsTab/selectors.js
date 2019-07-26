// @flow
import { createSelector } from 'reselect';

import { selectTransactions } from 'state/transactions/selectors';

const selectors = createSelector(
  selectTransactions,
);

export default selectors;
