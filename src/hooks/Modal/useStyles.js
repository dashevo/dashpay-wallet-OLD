/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

import { Dimensions } from 'react-native';

// Internal dependencies
import { createUseStyles } from 'hooks/Styles';
import Animated from 'react-native-reanimated';

const { interpolate, Extrapolate } = Animated;
const MODAL_WIDTH = 250;

const { height, width } = Dimensions.get('window');

const first = () => ({
  container: {
    position: 'relative',
    flex: 1,
  },
  backdrop: {
    backgroundColor: '#000',
    bottom: 0,
    left: 0,
    opacity: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  body: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 18,
    borderTopLeftRadius: 18,
    elevation: 5,
    flex: 1,
    width: 250,
    bottom: 20,
    position: 'absolute',
    right: 0,
    top: 20,
    transform: [{ translateX: MODAL_WIDTH }],
  },
  touchable: {
    height,
    width,
  },
});

const second = interactable => ({
  backdrop: [
    {
      opacity: interpolate(interactable.translateX, {
        inputRange: [0, MODAL_WIDTH],
        outputRange: [0.75, 0],
        extrapolate: Extrapolate.CLAMP,
      }),
    },
  ],
  body: [
    {
      transform: [{ translateX: interactable.translateX }],
    },
  ],
});

const useStyles = createUseStyles(first, second);

export default useStyles;
