/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Avatar } from 'components';
import styles from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import { connect } from 'react-redux';
// import selector from './selectors';
// import actions from './actions';

class PaymentConfirmationScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): ReactElement {
    return (
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <Avatar source={require('assets/images/avatar-default.png')} />
          </View>
          <Text style={styles.titleText}>Pay</Text>
          <Text style={styles.fiatBeforeFee}>$700</Text>
          <View style={styles.inset}>
            <Text style={styles.insetHeader}>Sending</Text>
            <Text style={styles.insetValue}>D 1.23456</Text>
            <Text>Network Fee</Text>
            <Text>D 0.00001</Text>
          </View>
          <Text>Total</Text>
          <Text>$700.15</Text>
          <View style={styles.footer}></View>
        </View>
        <View style={styles.swipeArea}>
          <Avatar source={require('assets/images/avatar-default.png')} />
          <Text>Swipe to Pay</Text>
          <Avatar source={require('assets/images/avatar-default.png')} />
        </View>
      </View>
    );
  }
}

// PaymentConfirmationScreen = connect(
//   selector,
//   actions
// )(PaymentConfirmationScreen);

export default PaymentConfirmationScreen;
