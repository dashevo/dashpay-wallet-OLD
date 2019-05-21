/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

// Internal dependencies
import useTranslate from 'hooks/Translate';
import useAnimation from './useAnimation';
import useStyles from './useStyles';

function ConfirmButton(props) {
  const [touched, setTouched] = useState(false);
  const translate = useTranslate();
  const styles = useStyles();

  const {
    bind, container, button, translateX,
  } = useAnimation({
    onSwipe: () => {
      setTouched(true);
      props.onPress();
    },
  });

  const pulse = null;

  return (
    <Animated.View style={styles.container} {...container}>
      {pulse}
      <PanGestureHandler {...bind} enabled={!touched}>
        <Animated.View style={[styles.button, { transform: [{ translateX }] }]} {...button}>
          <Image
            style={styles.image}
            source={{ uri: 'https://api.adorable.io/avatars/285/anonymous.png' }}
          />
          <Text style={styles.text}>{translate(touched ? 'SENDING' : 'Swipe to Pay')}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

export default ConfirmButton;
