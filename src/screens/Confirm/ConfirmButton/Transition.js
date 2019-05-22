import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

const { Value, timing } = Animated;

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

type TransitionProps = {
  transitionStart: Function,
  transitionEnd: Function,
  getTransitionProps: Function,
  item: Object,
  status: string,
  dispatch: Function,
};

function Transition(props: TransitionProps) {
  const {
    transitionStart, transitionEnd, getTransitionProps, item, status, dispatch,
  } = props;
  const { getComponet, ...rest } = item;

  const Componet = getComponet();
  const animatedValue = useValue(-360);

  const animation1 = useAnimation(() => timing(animatedValue, {
    duration: 500,
    toValue: 0,
    easing: Easing.inOut(Easing.ease),
  }));

  const animation2 = useAnimation(() => timing(animatedValue, {
    duration: 500,
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
