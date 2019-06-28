/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import {
  CREATE_SEND_PAYMENT_TRANSACTION_REQUEST,
  CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS,
  CREATE_SEND_PAYMENT_TRANSACTION_FAILURE,
} from './action-types';

export type Action = {
  types: [
    CREATE_SEND_PAYMENT_TRANSACTION_REQUEST,
    CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS,
    CREATE_SEND_PAYMENT_TRANSACTION_FAILURE,
  ],
};

export type User = {
  displayName?: string,
  imageURL?: string,
};

export type State = {
  user: User,
};
