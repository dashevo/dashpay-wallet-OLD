import { orderBy } from 'lodash';
import { alternativeCurrencySelector } from 'state/alternativeCurrency/selectors';
import { contactSelectorFactory } from 'state/contacts/selectors';

function mapStateToProps(state, props) {
  const alternativeCurrency = alternativeCurrencySelector(state);
  const recipient = props.navigation.getParam('recipient');
  let transactions = state.payments.send.byRecipients[recipient] || [];

  const receiver = contactSelectorFactory(recipient)(state) || {};
  const sender = contactSelectorFactory('yXRAGqEeCuVdL34S6UsBFhnJy7cajNmfvx')(state) || {}; // Tmp

  transactions = transactions.map((transactionId) => {
    const transaction = state.payments.send.items[transactionId];
    return {
      dashAmount: transaction.dashAmount,
      fiatAmount: transaction.fiatAmount,
      timestamp: transaction.timestamp,
      receiver,
      sender,
    };
  });

  transactions = orderBy(transactions, ['timestamp'], ['desc']);

  const dashAmount = props.navigation.getParam('amount') || 0;
  const fiatAmount = dashAmount * alternativeCurrency.rate;

  return {
    alternativeCurrency,
    transactions,
    receiver,
    sender,
    initialValues: {
      dashAmount,
      fiatAmount,
      recipient,
      name: '',
      image: '',
      ...receiver,
    },
  };
}

export default mapStateToProps;
