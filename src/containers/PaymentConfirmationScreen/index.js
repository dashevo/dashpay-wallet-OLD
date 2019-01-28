/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Animated } from 'react-native';
import { Avatar } from 'components';
import {
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import styles from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { StateType } from './types';
import { connect } from 'react-redux';
// import selector from './selectors';
// import actions from './actions';

class SwipeComponent extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      maxSwipeDistance: 10,
      width: 10,
    }
    this._swipeDistance = new Animated.Value(0);
    this._swipeDistance.addListener(({ value }) => {
      this._swipeDistanceValue = value;
    });
    this._onPanGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this._swipeDistance,
          },
        },
      ],
      { useNativeDriver: true }
    );
  }

  _onLayout = event => {
    this.setState({
      width: event.nativeEvent.layout.width,
      maxSwipeDistance: event.nativeEvent.layout.width - 50 - 16,
    });
  }

  _onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      if (this._swipeDistanceValue < this.state.maxSwipeDistance - 25) {
        // not enough of a swipe
        Animated.spring(this._swipeDistance, {
          velocity: 10,
          tension: 60,
          friction: 10,
          toValue: 0,
          useNativeDriver: true
        }).start();
      } else {
        // they swiped like they meant it
        Animated.spring(this._swipeDistance, {
          velocity: 10,
          tension: 60,
          friction: 10,
          toValue: this.state.maxSwipeDistance,
          useNativeDriver: true
        }).start();
      }
    }
  };

  render(): ReactElement {
    return (
      <PanGestureHandler
        onGestureEvent={this._onPanGestureEvent}
        onHandlerStateChange={this._onHandlerStateChange}>
        <Animated.View style={styles.swipeArea} onLayout={this._onLayout}>
          <Animated.View style={[styles.swipeMovablePart, {
            transform: [{
              translateX: this._swipeDistance.interpolate({
                inputRange: [0, this.state.maxSwipeDistance],
                outputRange: [0, this.state.maxSwipeDistance],
                extrapolate: 'clamp',
              })
            }]
          }]}>
            <Avatar style={styles.swipeAvatar} />
          </Animated.View>
          <Text style={styles.swipeText}>Swipe to Pay</Text>
          <Animated.View style={{
            transform: [{
              scale: this._swipeDistance.interpolate({
                inputRange: [0, this.state.maxSwipeDistance],
                outputRange: [0.5, 1],
                extrapolate: 'clamp',
              })
            }]
          }}>
            <Avatar source={require('assets/images/dash_logo_white_on_blue.png')}
              style={styles.swipeAvatar} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

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
            <Text style={styles.totalFiat}>$700.16</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.chevron}></View>
            <Text style={styles.address}>1BoatSLRHtKNnhkdXEeobR76b53LETtpyT</Text>
          </View>
        </View>
        <SwipeComponent />
      </View>
    );
  }
}

// PaymentConfirmationScreen = connect(
//   selector,
//   actions
// )(PaymentConfirmationScreen);

export default PaymentConfirmationScreen;
