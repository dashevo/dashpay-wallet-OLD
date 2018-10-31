/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import connect from "react-redux/es/connect/connect";
import selector from "./selectors";
import actions from "./actions";

class TransactionHistoryScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    props.getTransactions();
  }

  renderItem(transaction, key): React.Element<any> {
    return (
      <View style={styles.itemContainer} key={key}>
        <Text>{JSON.stringify(transaction)}</Text>
      </View>
    );
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Text>Received</Text>
        { this.props.history.received.map(this.renderItem) }
        <Text>Sent</Text>
        { this.props.history.sent.map(this.renderItem) }
      </View>
    );
  }
};
TransactionHistoryScreen = connect(
  selector,
  actions
)(TransactionHistoryScreen);

export default TransactionHistoryScreen;
