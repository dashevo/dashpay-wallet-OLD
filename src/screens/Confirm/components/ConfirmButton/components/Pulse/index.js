import React from 'react';
import Animated from 'react-native-reanimated';
import { SCREEN_WIDTH } from 'constants';
import useAnimation from './useAnimation';
import useStyles from './useStyles';

const { interpolate } = Animated;

function Pulse({ opacity }) {
  const animation = useAnimation(-1, 1);
  const styles = useStyles();

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateX: interpolate(animation, {
                inputRange: [-1, 1],
                outputRange: [-SCREEN_WIDTH, 0],
              }),
            },
          ],
          opacity: interpolate(animation, {
            inputRange: [-1, 1],
            outputRange: [opacity, 0],
          }),
        },
      ]}
    />
  );
}

export default Pulse;
