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
        <View style={styles.containerContainer}>
          <View style={styles.container}>
            <View style={styles.avatarContainer}>
              <Avatar source={require('assets/images/dash_logo_white_on_blue.png')}
                style={styles.topAvatar} />
            </View>
            <View style={styles.header}>
              <Text style={styles.titleText}>Pay</Text>
              <Text style={styles.fiatBeforeFee}>$700</Text>
            </View>
            <View style={styles.inset}>
              <Text style={styles.insetHeader}>Sending</Text>
              <Text style={styles.insetValue}>D 1.23456</Text>
              <Text style={styles.insetHeader}>Network Fee</Text>
              <Text style={styles.insetValue}>D 0.00001</Text>
            </View>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalFiat}>$700.15</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.chevron}></View>
            <Text style={styles.address}>1BoatSLRHtKNnhkdXEeobR76b53LETtpyT</Text>
          </View>
        </View>
        <View style={styles.swipeArea}>
          <Avatar style={styles.swipeAvatar} />
          <Text style={styles.swipeText}>Swipe to Pay</Text>
          <Avatar source={require('assets/images/dash_logo_white_on_blue.png')}
            style={styles.swipeAvatar} />
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
