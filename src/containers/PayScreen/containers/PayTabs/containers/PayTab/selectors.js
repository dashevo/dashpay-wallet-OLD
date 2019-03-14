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
  let sender =
    state.contacts.local.items['XXRAGqEeCuVdL34S6UsBFhnJy7cajNmfvx'];

  transactions = transactions.map(transaction => {
    return {
      dashAmount: transaction.dashAmount,
      fiatAmount: transaction.fiatAmount,
      timestamp: transaction.timestamp,
      receiver: state.contacts.local.items[transaction.recipient], // Tmp
      sender
    };
  });

  transactions = orderBy(transactions, ['timestamp'], ['desc']);

  return {
    transactions,
    initialValues: {
      recipient,
      name: '',
      image: '',
      ...contact
    }
  };
}

export default mapStateToProps;
