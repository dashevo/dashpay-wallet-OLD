/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Animated from 'react-native-reanimated';

// Internal dependencies
import { SCREEN_HEIGHT } from 'constants';
import BackButton from './components/BackButton';
import PaymentDetails from './components/PaymentDetails';
import FeeDetails from './components/FeeDetails';
import ConfirmButton from './components/ConfirmButton';
import useNavigation from './useNavigation';
import useStyles from './useStyles';
import actions from './actions';

const { interpolate } = Animated;

type ConfirmProps = {
  navigation: Object,
};

const ONCE = [];

function Confirm(props: ConfirmProps) {
  const navigation = useNavigation(props);
  const styles = useStyles();

  const { animatedValue, goBack, params } = navigation;
  const { onConfirmation, ...rest } = params;

  const overlayStyle = [
    styles.overlay,
    {
      opacity: interpolate(animatedValue, {
        inputRange: [0, 0.75],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    },
  ];

  const bodyStyle = [
    styles.body,
    {
      transform: [
        {
          translateY: interpolate(animatedValue, {
            inputRange: [0, 1],
            outputRange: [-SCREEN_HEIGHT, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    },
  ];

  const footerStyle = [
    styles.footer,
    {
      transform: [
        {
          translateY: interpolate(animatedValue, {
            inputRange: [0, 1],
            outputRange: [SCREEN_HEIGHT, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    },
  ];

  function handleBack() {
    goBack();
  }

  // const handleRequest = useCallback(() => {}, ONCE);
  // const handleSuccess = useCallback(() => {}, ONCE);
  // const handleFailure = useCallback(() => {}, ONCE);

  function handleRequest() {}

  function handleSuccess() {}

  function handleFailure() {}

  return (
    <View style={styles.container}>
      <Animated.View style={overlayStyle} />
      <Animated.View style={bodyStyle}>
        <View style={styles.inner}>
          <BackButton onPress={handleBack} />
          <View style={styles.paymentDetails}>
            <PaymentDetails {...rest} />
          </View>
          <View style={styles.confirmButton}>
            <ConfirmButton
              onRequest={handleRequest}
              onSuccess={handleSuccess}
              onFailure={handleFailure}
            />
          </View>
          <View style={styles.triangle} />
        </View>
      </Animated.View>
      <Animated.View style={footerStyle}>
        <FeeDetails {...rest} />
      </Animated.View>
    </View>
  );
}

export default connect(
  null,
  actions,
)(Confirm);
