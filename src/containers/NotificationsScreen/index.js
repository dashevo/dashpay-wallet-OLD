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

class NotificationsScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    props.getTransactionHistory();
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
        <Text>Received Contact Requests</Text>
        { this.props.contactRequests.map(this.renderItem) }
        <Text>Received Transactions</Text>
        { this.props.history.received.map(this.renderItem) }
        <Text>Sent Transactions</Text>
        { this.props.history.sent.map(this.renderItem) }
      </View>
    );
  }
};
NotificationsScreen = connect(
  selector,
  actions
)(NotificationsScreen);

export default NotificationsScreen;
