/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

 import { MAKE_PAYMENT_TRANSACTION_REQUEST } from './constants';
 import { MAKE_PAYMENT_TRANSACTION_SUCCESS } from './constants';
 import { MAKE_PAYMENT_TRANSACTION_FAILURE } from './constants';
 import { GET_TRANSACTIONS_REQUEST } from './constants';
 import { GET_TRANSACTIONS_SUCCESS } from './constants';
 import { GET_TRANSACTIONS_FAILURE } from './constants';

export const makePaymentTransaction = (type, recipient, amount) => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        MAKE_PAYMENT_TRANSACTION_REQUEST,
        MAKE_PAYMENT_TRANSACTION_SUCCESS,
        MAKE_PAYMENT_TRANSACTION_FAILURE,
      ],
      async asyncTask(state) {
        try {
          return walletLib.payTo(type, recipient, amount);
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};

const mockTransactions = [
  {
    type: 'sent',
    txid: '36820d7268090d6f315eef03b28b7b2b2097c8b067608f652612a2c4612a6697',
    time: '2018-10-30 09:56:42',
    from: 'yPWVEG3mW8pFdPCXcE53gN1fSTM8dkV7kF',
    to: [{
      address: 'yPn5VvPk7ioN9emDv3MkCKovpjNqSLwW1p',
      amount: 6.9998,
    }],
  },
  {
    type: 'receive',
    txid: '2911362650f08df1ea16e03973bb41e1ee33680cce2ec6ce864e2daf35431e08',
    time: '2018-10-30 09:56:42',
    from: 'yPn5VvPk7ioN9emDv3MkCKovpjNqSLwW1p',
    to: [{
      address: 'yPWVEG3mW8pFdPCXcE53gN1fSTM8dkV7kF',
      amount: 1.3726,
    }],
  }
];

export const getTransactions = () => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        GET_TRANSACTIONS_REQUEST,
        GET_TRANSACTIONS_SUCCESS,
        GET_TRANSACTIONS_FAILURE,
      ],
      async asyncTask(state) {
        try {
          return mockTransactions;
          // return walletLib.account.getTransactionHistory();
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
