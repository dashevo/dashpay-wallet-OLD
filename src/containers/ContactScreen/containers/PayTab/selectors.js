import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
import { alternativeCurrencySelector } from 'state/alternativeCurrency/selectors';
import { profileSelectorFactory } from 'state/profiles/selectors';
import { currentUserSelector } from 'state/account/selectors';

import TXTYPES from 'constants/txtypes';

const recipientSelector = (state, props) => props.navigation.getParam('recipient', '');
const dashAmountSelector = (state, props) => props.navigation.getParam('amount') || 0;
const sentPaymentsSelector = state => state.payments.send;


export default createSelector(
  recipientSelector,
  profileSelectorFactory,
  alternativeCurrencySelector,
  sentPaymentsSelector,
  dashAmountSelector,
  currentUserSelector,
  (recipient, profileSelector, alternativeCurrency, sentPayments, dashAmount, cachedUser) => {
    let transactions = sentPayments.byRecipients[recipient] || [];
    const { username } = cachedUser;

    const receiver = profileSelector(recipient) || { address: recipient };
    const sender = profileSelector(username) || cachedUser;


    transactions = transactions.map((transactionId) => {
      const transaction = sentPayments.items[transactionId];

      return {
        transactionId,
        amount: transaction.dashAmount,
        currency: 'dash',
        fee: 0,
        timestamp: transaction.timestamp,
        type: TXTYPES.SENT,
        sender,
        receiver,
        conversion: {
          amount: transaction.fiatAmount,
          currency: 'usd',
          rate: 0,
        },
      };
    });

    transactions = orderBy(transactions, ['timestamp'], ['desc']);

    const fiatAmount = dashAmount * alternativeCurrency.rate;

    return {
      alternativeCurrency,
      transactions,
      receiver,
      sender,
      user: {
        // Tmp
        username: receiver.username || recipient,
        avatarUrl: receiver.avatarUrl,
      },
      initialValues: {
        dashAmount,
        fiatAmount,
        recipient,
        username: '',
        avatarUrl: '',
        ...receiver,
      },
    };
  },
);
