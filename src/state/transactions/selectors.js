// @flow
import { alternativeCurrencySelector } from 'state/alternativeCurrency/selectors';
import TXTYPES from 'constants/txtypes';

export const selectRequests = state => state.contacts.blockchain.requests;

export const selectTransactions = (state) => {
  const transactions = [];
  state.transactions.history.forEach((item) => {
    if (item.type === TXTYPES.MOVED) {
      return;
    }
    // TODO don't assume we receive every TX output
    const dashSat = item.to.reduce((accumulator, { valueSat }) => accumulator + valueSat, 0);

    const fromAddress = item.from[0].address;
    const toAddress = item.to[0].address;

    const sender = { address: fromAddress };
    const receiver = { address: fromAddress };

    let typeText = 'OTHER';
    if (item.type === TXTYPES.RECEIVED) {
      // TODO refer to an imported constant
      typeText = TXTYPES.RECEIVED
      receiver.username = state.user.username;
      receiver.avatarUrl = state.user.avatarUrl;
    } else if (item.type === TXTYPES.SENT) {
      // TODO refer to an imported constant
      typeText = TXTYPES.SENT
      sender.username = state.user.username;
      sender.avatarUrl = state.user.avatarUrl;
    }

    const dashAmount = dashSat
      .toString(10)
      .padStart(9, '0')
      .replace(/(\d{8})$/, '.$1')
      .replace(/\.?0+$/, '');
    const alternativeCurrency = alternativeCurrencySelector(state);
    let fiatAmount = (dashSat * alternativeCurrency.rate) / 100000000;
    const { code } = alternativeCurrency;
    fiatAmount = fiatAmount.toFixed(2).toString(10);

    const timestamp = item.time ? new Date(item.time * 1000) : new Date();
    // unconfirmed txes are missing time field

    transactions.push({
      amount: dashAmount,
      currency: 'dash',
      fee: 0,
      timestamp, // time in seconds, JS time uses milliseconds
      type: typeText,
      sender,
      receiver,
      conversion: {
        amount: fiatAmount,
        currency: code.toLowerCase(),
        rate: 0,
      },
    });
  });
  return transactions;
};

export const selectOngoingTransaction = state => state.transactions.ongoingTransaction;
