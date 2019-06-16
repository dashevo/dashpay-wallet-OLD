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
  acceptRequest: ?Function,
  rejectRequest: ?Function,
};

export type ItemWithStylesProps = Item & Styles;
