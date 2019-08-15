/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useState, useCallback } from 'react';
import Animated from 'react-native-reanimated';

const { Value } = Animated;
const ONCE = [];

function useOnLayout(initialHeight = 0, initialWidth = 0) {
  const [height] = useState(() => new Value(initialHeight));
  const [width] = useState(() => new Value(initialWidth));

  const onLayout = useCallback(
    ({ nativeEvent }) => {
      if (nativeEvent.layout.height > 0) {
        height.setValue(nativeEvent.layout.height);
      }

      if (nativeEvent.layout.width > 0) {
        width.setValue(nativeEvent.layout.width);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );

  return {
    onLayout,
    height,
    width,
  };
}

export default useOnLayout;
