/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { GET_TRANSACTIONS_SUCCESS } from './constants';
import { TRANSACTION_RECIPIENT_SCANNED } from './constants';
import { CREATE_PAYMENT_TRANSACTION_SUCCESS } from './constants';

export const initialState = {
  history: [],
  ongoingTransaction: {
    recipient: '',
    amount: 0,
    currency: 'DASH',
  },
};

const ongoingTransaction = (state, action) => {
  switch (action.type) {
    case TRANSACTION_RECIPIENT_SCANNED:
      // Remove prefix from dashaddress if exists.
      let recipient = action.payload.data || '';
      recipient = recipient.replace('dash:', '');
      return {
        ...state,
        recipient,
      };
    default:
      return state;
  }
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        history: action.response,
      };

    case CREATE_PAYMENT_TRANSACTION_SUCCESS:
      const timestamp = new Date().getTime();
      return {
        ...state,
        history: {
          ...state.history,
          [action.response.recipient]: (state.history[action.response.recipient] || []).concat({
            recipient: action.response.recipient,
            dashAmount: action.response.dashAmount,
            fiatAmount: action.response.fiatAmount,
            timestamp,
          }),
        },
      };

    default:
      return {
        ...state,
        ongoingTransaction: ongoingTransaction(state.ongoingTransaction, action),
      };
  }
};

export default transactions;
