/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

function mapStateToProps(state, props) {
  const recipient = props.navigation.getParam('recipient');
  const contact = state.contacts.local.items[recipient] || {};
  let transactions = state.transactions.history[recipient] || [];

  const receiver = state.contacts.local.items[recipient] || {}; // Tmp
  const sender =
    state.contacts.local.items['yXRAGqEeCuVdL34S6UsBFhnJy7cajNmfvx'] || {}; // Tmp

  transactions = transactions.map(transaction => {
    return {
      dashAmount: transaction.dashAmount,
      fiatAmount: transaction.fiatAmount,
      timestamp: transaction.timestamp,
      receiver,
      sender
    };
  });

  transactions = orderBy(transactions, ['timestamp'], ['desc']);

  return {
    transactions,
    receiver,
    sender,
    initialValues: {
      recipient,
      name: '',
      image: '',
      ...contact
    }
  };
}

export default mapStateToProps;
