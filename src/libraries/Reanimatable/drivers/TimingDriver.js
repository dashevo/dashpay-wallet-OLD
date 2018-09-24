/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { Animated } from 'react-native';
import Driver from './Driver';

class TimingDriver extends Driver {
  constructor(configs = {}) {
    super(configs);

    this.configs = {
      toValue: 1,
      duration: 300,
      useNativedriverr: true,
      ...configs
    };

    this.startAnimation = this.startAnimation.bind(this);
  }

  startAnimation(configs, onFinish) {
    Animated.timing(this.value, {
      ...this.configs,
      ...configs
    }).start(onFinish);
  }
}

export default TimingDriver;
