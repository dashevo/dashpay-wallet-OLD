// @flow
import {
  TRANSACTIONS_CREATE_TRANSACTION_ASYNC,
  TRANSACTIONS_BROADCAST_TRANSACTION_ASYNC,
  TRANSACTIONS_GET_TRANSACTIONS_ASYNC,
} from 'state/action-types';
import dashToDuffs from 'utils/dashToDuffs';

type CreateTransactionOptions = {
  satoshis: any,
  recipient: string,
  amount: number,
};

// Create a valid transaction ready to be broadcasted from the provided options
export const createTransaction = (opts: CreateTransactionOptions) => (
  dispatch, getState, { account },
) => dispatch({
  types: TRANSACTIONS_CREATE_TRANSACTION_ASYNC,
  asyncTask: async () => {
    try {
      if (!opts.recipient) {
        throw new Error('Missing recipient to pay');
      }

      const { recipient } = opts;
      const satoshis = opts.satoshis !== undefined
        ? opts.satoshis
        : dashToDuffs(parseFloat(opts.amount));
      if (!satoshis) throw new Error('Missing satoshis or amount to pay');

      const tx = account.createTransaction({
        recipient,
        satoshis,
      });

      return account.broadcastTransaction(tx);
    } catch (err) {
      const { message = 'Something went wrong.' } = err;
      throw new Error(message);
    }
  },
});

// Will broadcast the rawTx to the active network
export const broadcastTransaction = (rawTx: string): Promise<string> => (
  dispatch, getState, { account },
) => dispatch({
  types: TRANSACTIONS_BROADCAST_TRANSACTION_ASYNC,
  asyncTask: () => account.broadcast(rawTx),
});

// Get the transaction history of the active account
export const getTransactionHistory = () => (
  dispatch, getState, { account },
) => dispatch({
  types: TRANSACTIONS_GET_TRANSACTIONS_ASYNC,
  asyncTask: () => account.getTransactionHistory(),
});
