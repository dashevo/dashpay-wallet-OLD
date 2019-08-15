/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// /////////////////////////////////////////////////////////////////////////////
// This file is still in progress.                                            //
// /////////////////////////////////////////////////////////////////////////////

import Animated from 'react-native-reanimated';

const {
  block,
  Clock,
  clockRunning,
  cond,
  spring,
  startClock,
  stopClock,
  set,
  Value,
  eq,
  call,
} = Animated;

const NOOP = 0;

class Controller {
  constructor(options = {}) {
    this.position = new Value(0);

    this.clock = new Clock();
    this.toValue = new Value(0);

    this.config = {
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
      stiffness: 1000,
      toValue: this.toValue,
      ...options,
    };

    this.state = {
      finished: new Value(0),
      velocity: new Value(0),
      position: this.position,
      time: new Value(0),
    };

    this.animation = block([
      cond(eq(this.position, this.toValue), NOOP, [
        cond(clockRunning(this.clock), NOOP, [
          set(this.state.finished, 0),
          set(this.state.velocity, 0),
          set(this.state.time, 0),
          startClock(this.clock),
        ]),
      ]),
      spring(this.clock, this.state, this.config),
      cond(this.state.finished, [
        stopClock(this.clock),
        call([], () => {
          if (this.onEnd) {
            this.onEnd();
          }
        }),
      ]),
      this.position,
    ]);
  }

  update = ({ fromValue, toValue, onEnd }) => {
    this.position.setValue(fromValue);
    this.toValue.setValue(toValue);
    this.onEnd = onEnd;
  };

  getValue = () => this.animation;

  destroy = () => {
    this.clock = null;
    this.toValue = null;
    this.position = null;
    this.config = {};
    this.state = {};
    this.animation = {};
  };
}

export default Controller;
