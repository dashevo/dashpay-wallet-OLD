/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
export default {
  progress: (driver, props) => ({
    transform: [
      {
        translateX: driver.interpolate({
          inputRange: [0, 100],
          outputRange: [240 / -2, 0],
          extrapolate: 'clamp'
        })
      },
      {
        scaleX: driver.interpolate({
          inputRange: [0, 100],
          outputRange: [0.0001, 1],
          extrapolate: 'clamp'
        })
      }
    ]
  })
};
