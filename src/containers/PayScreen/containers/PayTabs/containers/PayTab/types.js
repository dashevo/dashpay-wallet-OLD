// @flow
import type Navigation from 'types/navigation';

interface Profile {
  avatarUrl: string,
}

export type Props = {
  navigation: Navigation,
  transactions: Array<Object>,
  alternativeCurrency: Object,
  fetchAlternativeCurrencyRateIfNeeded: Function,
  createSendPaymentTransaction: Function,
  receiver: Profile,
  sender: Profile,
};

export type State = {};
