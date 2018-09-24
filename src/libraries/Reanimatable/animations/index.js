/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
export default {
  fadeIn(driver, layout) {
    return {
      opacity: driver.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
    };
  },
  fadeOut(driver, layout) {
    return {
      opacity: driver.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      })
    };
  }
};
