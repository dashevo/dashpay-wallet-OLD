import { createStructuredSelector } from 'reselect';

import { selectTransactions } from 'state/transactions/selectors';

export default createStructuredSelector({
  transactions: selectTransactions,
});
