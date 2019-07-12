import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
import { alternativeCurrencySelector } from 'state/alternativeCurrency/selectors';
import { contactSelectorFactory } from 'state/contacts/selectors';
import { profileSelectorFactory } from 'state/profiles/selectors';

const recipientSelector = (state, props) => props.navigation.getParam('recipient', '');
const dashAmountSelector = (state, props) => props.navigation.getParam('amount') || 0;
const sentPaymentsSelector = state => state.payments.send;

export default createSelector(
  recipientSelector,
  contactSelectorFactory,
  profileSelectorFactory,
  alternativeCurrencySelector,
  sentPaymentsSelector,
  dashAmountSelector,
  (
    recipient, contactSelector, profileSelector,
    alternativeCurrency, sentPayments, dashAmount,
  ) => {
    let transactions = sentPayments.byRecipients[recipient] || [];

    const receiver = contactSelector(recipient) || profileSelector(recipient) || {};
    const sender = contactSelector('yXRAGqEeCuVdL34S6UsBFhnJy7cajNmfvx') || {}; // Tmp

    transactions = transactions.map((transactionId) => {
      const transaction = sentPayments.items[transactionId];
      return {
        dashAmount: transaction.dashAmount,
        fiatAmount: transaction.fiatAmount,
        timestamp: transaction.timestamp,
        receiver,
        sender,
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
