/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { Animated } from 'react-native';

export default class Driver {
  constructor() {
    this.value = new Animated.Value(0);
    this.interpolate = this.interpolate.bind(this);
  }

  getAnimationProps() {
    return {};
  }

  interpolate(configs) {
    return this.value.interpolate(configs);
  }
}
