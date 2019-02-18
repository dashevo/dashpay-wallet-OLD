/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

export const selectTransactions = state => state.transactions.history;

export const selectOngoingTransaction = state =>
  state.transactions.ongoingTransaction;
