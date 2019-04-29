// @flow
export type Props = {
  navigation: {
    navigate: Function,
    goBack: Function,
  },
  transactions: Array<Object>,
  alternativeCurrency: Object,
  fetchAlternativeCurrencyRateIfNeeded: Function,
  createSendPaymentTransaction: Function,
};
export type State = {};
