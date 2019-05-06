import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import useTransition from './useTransition';

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
} = Animated;

function useTransitionItems(props) {
  const [state, setState] = useState(() => {
    function onPressYes() {
      setState(state.filter(item => item.key === 'yes'));
    }

    function onPressNo() {
      setState(state.filter(item => item.key === 'no'));
    }

    return [
      {
        key: 'yes',
        label: 'Item yes',
        onPress: onPressYes,
      },
      {
        key: 'no',
        label: 'Item no',
        onPress: onPressNo,
      },
    ];
  });

  return state;
}

function useValue(config) {
  const ref = useRef(null);

  function getObserver() {
    const observer = ref.current;
    if (observer !== null) {
      return observer;
    }
    const newObserver = new Value(config);
    ref.current = newObserver;
    return newObserver;
  }

  return getObserver();
}

function useAnimation(callback) {
  const ref = useRef(null);

  function getObserver() {
    const observer = ref.current;
    if (observer !== null) {
      return observer;
    }
    const newObserver = callback();
    ref.current = newObserver;
    return newObserver;
  }

  return getObserver();
}

function Item(props) {
  useEffect(
    () => {
      if (props.item.status === 'leaving') {
        runAnimation();
      }
    },
    [props.item.status],
  );

  async function runAnimation() {
    const nextIndex = (props.index + 1) % 2;
    await props.runAnimation(nextIndex);
    props.onLeave(props.item);
  }

  const { index } = props; // 0
  const left = index - 0.5;
  const right = index + 0.5;

  const { length } = props;

  const width = concat(
    interpolate(props.animatedValue, {
      inputRange: [left, index, right],
      outputRange: [100 / length, 100, 100 / length],
      extrapolate: 'clamp',
    }),
    '%',
  );

  const zIndex = props.item.status === 'leaving' ? 1 : 2;

  const animatedStyles = index === 0
    ? {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width,
      zIndex,
    }
    : {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width,
      zIndex,
    };

  return (
    <Animated.View style={animatedStyles}>
      <TouchableOpacity onPress={props.item.onPress}>
        <Text>{props.item.label}</Text>
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
        toValue,
      });

      animation.start(resolve);
    });
  }

  function handleEnter(item) {
    transition.onEnter(item);
  }

  function handleLeave(item) {
    transition.onLeave(item);
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
        backgroundColor: 'red',
        height: 48,
      }}
    >
      {transition.items.map(renderItem)}
    </View>
  );
}

export default Transition;
