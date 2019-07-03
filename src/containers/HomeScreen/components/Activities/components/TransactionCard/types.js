import { StyleSheet } from 'react-native';

type Item = {
  username: string,
  avatarUrl: string,
  type: string,
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
