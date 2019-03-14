/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

function mapStateToProps(state, props) {
  let transactions = [...state.contacts.blockchain.requests];

  transactions = transactions.map(transaction => {
    return {
      timestamp: transaction.timestamp,
      type: transaction.type,
      sender: state.contacts.local.items[transaction.recipient]
    };
  });

  return {
    transactions
  };
}

export default mapStateToProps;
