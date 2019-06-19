import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
import { alternativeCurrencySelector } from 'state/alternativeCurrency/selectors';
import { contactSelectorFactory } from 'state/contacts/selectors';

const recipientSelector = (state, props) => props.navigation.getParam('recipient', '');
const dashAmountSelector = (state, props) => props.navigation.getParam('amount') || 0;
const sentPaymentsSelector = state => state.payments.send;

export default createSelector(
  recipientSelector,
  contactSelectorFactory,
  alternativeCurrencySelector,
  sentPaymentsSelector,
  dashAmountSelector,
  (recipient, contactSelector, alternativeCurrency, sentPayments, dashAmount) => {
    let transactions = sentPayments.byRecipients[recipient] || [];

    const receiver = contactSelector(recipient) || {};
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

    console.log(receiver);

    return {
      alternativeCurrency,
      transactions,
      receiver,
      sender,
      user: {
        displayName: receiver.name || recipient,
        imageURL: receiver.image,
      },
      initialValues: {
        dashAmount,
        fiatAmount,
        recipient,
        name: '',
        image: '',
        ...receiver,
      },
    };
  },
);
