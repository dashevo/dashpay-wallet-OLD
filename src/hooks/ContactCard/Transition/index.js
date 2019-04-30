// This file will be splitted in a few components and custom hooks.

import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import useTransition from './useTransition';
import styles from './styles';

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
  interpolate,
  concat,
  and,
  eq
} = Animated;

function useTransitionItems(props) {
  const [state, setState] = useState(() => {
    function onPressYes() {
      let items = state.filter(item => item.key === 'yes').map(item => {
        return { ...item, showPulse: true };
      });
      setState(items);
    }

    function onPressNo() {
      let items = state.filter(item => item.key === 'no').map(item => {
        return { ...item, showPulse: true };
      });
      setState(items);
    }

    return [
      {
        key: 'yes',
        label: 'Yes',
        onPress: onPressYes,
        primary: true
      },
      {
        key: 'no',
        label: 'No',
        onPress: onPressNo,
        seconadry: true
      }
    ];
  });

  return state;
}

function useValue(config) {
  const ref = useRef(null);

  function getObserver() {
    let observer = ref.current;
    if (observer !== null) {
      return observer;
    }
    let newObserver = new Value(config);
    ref.current = newObserver;
    return newObserver;
  }

  return getObserver();
}

function useClock() {
  const ref = useRef(null);

  function getObserver() {
    let observer = ref.current;
    if (observer !== null) {
      return observer;
    }
    let newObserver = new Clock();
    ref.current = newObserver;
    return newObserver;
  }

  return getObserver();
}

function useAnimation(callback) {
  const ref = useRef(null);

  function getObserver() {
    let observer = ref.current;
    if (observer !== null) {
      return observer;
    }
    let newObserver = callback();
    ref.current = newObserver;
    return newObserver;
  }

  return getObserver();
}

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 2000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    state.position
  ]);
}

function Pulse(props) {
  const clock = useClock();
  const animation = useAnimation(() => {
    return runTiming(clock, -1, 1);
  });

  const translateX = interpolate(animation, {
    inputRange: [-1, 1],
    outputRange: [-300, 0]
  });

  const opacity = interpolate(animation, {
    inputRange: [-1, 1],
    outputRange: [props.opacity, 0]
  });

  return (
    <Animated.View
      style={{
        backgroundColor: '#000',
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        transform: [{ translateX }],
        opacity
      }}
    />
  );
}

function Item(props) {
  useEffect(
    () => {
      if (props.item.status === 'leaving') {
        runAnimation();
      }
    },
    [props.item.status]
  );

  async function runAnimation() {
    const nextIndex = (props.index + 1) % 2;
    await props.runAnimation(nextIndex);
    props.onLeave(props.item);
  }

  const index = props.index;
  const left = index - 0.5;
  const right = index + 0.5;

  const length = props.length;
  const minWidth = 100 / length;

  let width = concat(
    interpolate(props.animatedValue, {
      inputRange: [left, index, right],
      outputRange: [minWidth, 100, minWidth],
      extrapolate: 'clamp'
    }),
    '%'
  );

  let padding = interpolate(props.animatedValue, {
    inputRange: [left, index, right],
    outputRange: [5, 0, 5],
    extrapolate: 'clamp'
  });

  const zIndex = props.item.status === 'leaving' ? 1 : 2;

  const animatedStyles =
    index === 0
      ? {
          overflow: 'hidden',
          position: 'absolute',
          paddingLeft: 7.5,
          paddingRight: 7.5,
          top: 0,
          left: 0,
          bottom: 0,
          width,
          zIndex
        }
      : {
          overflow: 'hidden',
          position: 'absolute',
          paddingLeft: 7.5,
          paddingRight: 7.5,
          top: 0,
          right: 0,
          bottom: 0,
          width,
          zIndex
        };

  const styleName =
    props.item.primary === true ? 'primaryButton' : 'seconadryButton';
  const styleName2 =
    props.item.primary === true ? 'primaryButtonText' : 'seconadryButtonText';

  return (
    <Animated.View style={animatedStyles}>
      <TouchableOpacity style={styles[styleName]} onPress={props.item.onPress}>
        {props.item.showPulse && (
          <Pulse opacity={props.item.primary === true ? 0.2 : 0.1} />
        )}
        <Text style={styles[styleName2]}>{props.item.label}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

function Transition(props) {
  const transitionItems = useTransitionItems(props);
  const transition = useTransition(transitionItems);

  const animatedValue = useValue(0.5);

  function runAnimation(toValue = 1) {
    return new Promise((resolve, reject) => {
      const animation = timing(animatedValue, {
        easing: Easing.inOut(Easing.ease),
        duration: 500,
        toValue: toValue
      });

      animation.start(resolve);
    });
  }

  function handleEnter(item) {
    transition.onEnter(item);
  }

  function handleLeave(item) {
    transition.onLeave(item);
    if (item.label === 'Yes') {
      console.log('__props.sender.address__', props.sender.address);
      props.onReject(props.sender.address);
    } else {
      console.log('__props.sender.address__', props.sender.address);
      props.onAccept(props.sender.address);
    }
  }

  function renderItem(item, index) {
    return (
      <Item
        item={item}
        key={item.key}
        index={index}
        length={transition.items.length}
        animatedValue={animatedValue}
        runAnimation={runAnimation}
        onLeave={handleLeave}
      />
    );
  }

  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: 'transparent',
        height: 40,
        marginLeft: -7.5,
        marginRight: -7.5
      }}>
      {transition.items.map(renderItem)}
    </View>
  );
}

export default Transition;
