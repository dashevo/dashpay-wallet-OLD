// @flow
interface Profile {
  image: string,
}

export type Props = {
  navigation: {
    navigate: Function,
    goBack: Function,
  },
  transactions: Array<Object>,
  alternativeCurrency: Object,
  fetchAlternativeCurrencyRateIfNeeded: Function,
  receiver: Profile,
  sender: Profile
};

export type State = {};
