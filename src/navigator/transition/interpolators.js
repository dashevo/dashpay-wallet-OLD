/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { getInterpolationInputRange } from './helpers';

function screenInterpolator(props) {
  const { navigation, layout, position, scene } = props;

  if (!layout.isMeasured) {
    const focused = navigation.state.index === scene.index;
    const opacity = focused ? 1 : 0;
    // If not focused, move the scene far away.
    const translate = focused ? 0 : 1000000;
    return {
      opacity,
      transform: [{ translateX: translate }, { translateY: translate }]
    };
  }

  const interpolate = getInterpolationInputRange(props);
  if (!interpolate) return { opacity: 0 };

  const { first, last } = interpolate;
  const index = scene.index;
  const opacity = position.interpolate({
    inputRange: [first, first + 0.01, index, last - 0.01, last],
    outputRange: [0, 1, 1, 0.85, 0]
  });

  const height = layout.initHeight;
  const translateY = position.interpolate({
    inputRange: [first, index, last],
    outputRange: [height, 0, 0]
  });
  const translateX = 0;

  const scale = position.interpolate({
    inputRange: [first, first + 0.01, index, last - 0.01, last],
    outputRange: [0, 1, 1, 0.85, 0]
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }, { scale }]
  };
}

export default screenInterpolator;
