import { selectTransactions } from 'state/transactions';

const selectors = state => ({
  transactions: selectTransactions(state),
});

export default selectors;
