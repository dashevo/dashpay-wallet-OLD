import { StyleSheet } from 'react-native';

type Item = {
  address: string,
  type: string,
  image: ?string,
  timestamp: Date,
};

type Styles = {
  styles: StyleSheet.Styles,
}

export type Props = {
  item: Item,
  acceptBlockchainContact: ?Function,
  rejectBlockchainContact: ?Function,
};

export type ItemWithStylesProps = Item & Styles;
