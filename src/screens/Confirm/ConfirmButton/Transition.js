import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

import { DURATION } from '../index';

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
} = Animated;

function ConfirmMessage(props) {
  return <Text>Confirm Message</Text>;
}

const isSet = false;

function useValue(initialValue) {
  const value = useRef(null);
  if (value.current === null) {
    value.current = new Value(initialValue);
  }

  return value.current;
}

function useAnimation(callback) {
  const animation = useRef(null);
  if (animation.current === null) {
    animation.current = callback();
  }

  return animation.current;
}

function Transition(props) {
  const {
    transitionStart, transitionEnd, getTransitionProps, item, status, dispatch,
  } = props;
  const { getComponet, ...rest } = item;

  const Componet = getComponet();

  const animatedValue = useValue(-360);
  const toValue = useValue(0);

  const animation1 = useAnimation(() => timing(animatedValue, {
    duration: DURATION,
    toValue: 0,
    easing: Easing.inOut(Easing.ease),
  }));

  const animation2 = useAnimation(() => timing(animatedValue, {
    duration: DURATION,
    toValue: 360,
    easing: Easing.inOut(Easing.ease),
  }));

  const { style } = getTransitionProps({ animatedValue });

  useEffect(
    () => {
      if (status === 'ENTER') {
        dispatch(transitionStart());
        animation1.start(({ finished }) => {
          if (finished) {
            dispatch(transitionEnd());
          }
        });
      }
      if (status === 'EXIT') {
        dispatch(transitionStart());
        animation2.start(({ finished }) => {
          if (finished) {
            dispatch(transitionEnd());
          }
        });
      }
    },
    [status],
  );

  return (
    <Animated.View style={style}>
      <Componet {...rest} />
    </Animated.View>
  );
}

export default Transition;
