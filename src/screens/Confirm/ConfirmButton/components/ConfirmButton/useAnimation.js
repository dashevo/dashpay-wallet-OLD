/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { useState } from 'react';
import { State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const {
  set,
  cond,
  eq,
  add,
  spring,
  startClock,
  stopClock,
  clockRunning,
  sub,
  Value,
  Clock,
  event,
  max,
  min,
  greaterThan,
  divide,
  call,
  and,
} = Animated;

const SWIPE_DISTANCE_MINIMUM = 20;

function runSpring(clock, value, velocity, dest, callback) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };

  const config = {
    toValue: new Value(0),
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  };

  return [
    cond(
      clockRunning(clock),
      [set(config.toValue, dest)],
      [
        set(state.finished, 0),
        set(state.velocity, velocity),
        set(state.position, value),
        set(config.toValue, dest),
        startClock(clock),
      ],
    ),
    spring(clock, state, config),
    cond(state.finished, [
      cond(and(greaterThan(state.position, 0), eq(state.position, dest)), call([], callback)),
      stopClock(clock),
    ]),
    state.position,
  ];
}

function useAnimation(props) {
  const { onSwipe } = props;
  const [animation] = useState(() => {
    const clock = new Clock();

    const dragX = new Value(0);
    const state = new Value(-1);
    const dragVX = new Value(0);

    const translateX = new Value(0);
    const prevDragX = new Value(0);

    const containerWidth = new Value();
    const buttonWidth = new Value();

    const onGestureEvent = event([
      { nativeEvent: { translationX: dragX, velocityX: dragVX, state } },
    ]);

    const dest = sub(containerWidth, buttonWidth);
    const snapPoint = cond(greaterThan(translateX, divide(dest, 2)), dest, 0);

    const translateXCond = cond(
      eq(state, State.ACTIVE),
      [
        stopClock(clock),
        set(translateX, add(translateX, sub(dragX, prevDragX))),
        set(prevDragX, dragX),
        translateX,
      ],
      [
        set(prevDragX, 0),
        set(translateX, runSpring(clock, translateX, dragVX, snapPoint, onSwipe)),
      ],
    );

    function onLayoutContainer(e) {
      const { width } = e.nativeEvent.layout;
      containerWidth.setValue(width);
    }

    function onLayoutButton(e) {
      const { width } = e.nativeEvent.layout;
      buttonWidth.setValue(width);
    }

    const translateXFinal = max(min(dest, translateXCond), 0);

    const bind = {
      maxPointers: 1,
      enabled: true,
      activeOffsetX: [-SWIPE_DISTANCE_MINIMUM, SWIPE_DISTANCE_MINIMUM],
      failOffsetY: [-SWIPE_DISTANCE_MINIMUM, SWIPE_DISTANCE_MINIMUM],
      onGestureEvent,
      onHandlerStateChange: onGestureEvent,
    };

    const container = {
      onLayout: onLayoutContainer,
    };

    const button = {
      onLayout: onLayoutButton,
    };

    return {
      translateX: translateXFinal,
      bind,
      container,
      button,
    };
  });

  return animation;
}

export default useAnimation;
