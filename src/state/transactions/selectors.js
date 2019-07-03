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
    const dashSat = item.to.reduce((accumulator, { valueSat }) => (accumulator + valueSat), 0);
    let sender = { username: state.account.username, avatarUrl: null };
    let receiver = { username: state.account.username, avatarUrl: null };
    let typeText = 'OTHER';
    if (item.type === TXTYPES.RECEIVED) { // TODO refer to an imported constant
      typeText = 'RECEIVED';
      const fromAddress = item.from.length > 1 ? 'multiple addresses' : item.from[0].address;
      sender = { username: 'Unidentified Sender', avatarUrl: null, address: fromAddress };
    } else if (item.type === TXTYPES.SENT) { // TODO refer to an imported constant
      typeText = 'PAID';
      const toAddress = item.to.length > 1 ? 'multiple recipients' : item.to[0].address;
      receiver = { username: 'Unidentified Recipient', avatarUrl: null, address: toAddress };
    }
    const dashAmount = dashSat.toString(10).padStart(9, '0').replace(/(\d{8})$/, '.$1').replace(/\.?0+$/, '');
    const alternativeCurrency = alternativeCurrencySelector(state);
    let fiatAmount = dashSat * alternativeCurrency.rate / 100000000;
    const { code } = alternativeCurrency;
    fiatAmount = fiatAmount.toFixed(2).toString(10);

    const timestamp = item.time ? new Date(item.time * 1000) : new Date();
    // unconfirmed txes are missing time field

    transactions.push({
      dashSat,
      dashAmount,
      fiatAmount,
      fiatSymbol: code.toLowerCase(),
      sender,
      receiver,
      timestamp, // time in seconds, JS time uses milliseconds
      transactionType: typeText,
    });
  });
  return transactions;
};

export const selectOngoingTransaction = state => state.transactions.ongoingTransaction;
