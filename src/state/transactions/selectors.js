/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { selectAlternativeCurrency } from 'state/alternativeCurrency';

export const selectTransactions = state => {
  return state.transactions.history.map(item => {
    let dashSat = item.to.reduce((accumulator,item) => (accumulator + item.valueSat), 0); // TODO don't assume we receive every TX output
    let sender = { name: state.user.username, image: null };
    let receiver = { name: state.user.username, image: null };
    if (item.type == 'receive') { // TODO refer to an imported constant
      const fromAddress = item.from.length > 1 ? 'multiple addresses' : item.from[0].address;
      sender = { name: 'Unidentified Sender', image: null, address: fromAddress };
    } else if (item.type == 'sent') { // TODO refer to an imported constant
      const toAddress = item.to.length > 1 ? 'multiple recipients' : item.to[0].address;
      receiver = { name: 'Unidentified Recipient', image: null, address: toAddress };
    } else if (item.type === 'moved') {
      dashSat = item.fees;
    }
    const dashAmount = (dashSat / 1000000000).toString(10);
    let fiatAmount = dashSat * selectAlternativeCurrency(state).rate / 1000000000; // TODO historical rates would be better
    fiatAmount = fiatAmount.toFixed(2).toString(10);

    return {
      dashSat,
      dashAmount,
      fiatAmount,
      sender,
      receiver,
      timestamp: new Date(item.time * 1000), // time in seconds, JS time uses milliseconds
      transactionType: item.type
    };
  });
};

export const selectOngoingTransaction = state =>
  state.transactions.ongoingTransaction;
