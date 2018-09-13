/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { View } from 'react-native';
import { Animated, Easing } from 'react-native';

// Internal dependencies
import styles from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

class ProgressBar extends React.PureComponent<Props, State> {
  static defaultProps = {
    progress: 0,
    max: 100
  };

  state = {
    progress: 0
  };

  constructor(props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.onCompleted = this.onCompleted.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate() {
    this.animate();
  }

  animate() {
    if (this.props.progress <= 100) {
      Animated.timing(this.progress, {
        toValue: this.props.progress,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      }).start(this.onCompleted);
    }
  }

  onCompleted(event) {
    if (event.finished && this.props.progress >= 100) {
      this.props.onCompleted(event);
    }
  }

  renderProgressBar(): ReactElement {
    const progressStyle = {
      backgroundColor: '#fff',
      borderRadius: 15,
      height: 6,
      transform: [
        {
          translateX: this.progress.interpolate({
            inputRange: [0, 100],
            outputRange: [240 / -2, 0],
            extrapolate: 'clamp'
          })
        },
        {
          // Interpolation a temp workaround for https://github.com/facebook/react-native/issues/6278
          scaleX: this.progress.interpolate({
            inputRange: [0, 100],
            outputRange: [0.0001, 1],
            extrapolate: 'clamp'
          })
        }
      ]
    };
    return <Animated.View style={progressStyle} />;
  }

  render(): ReactElement {
    return <View style={styles.progress}>{this.renderProgressBar()}</View>;
  }
}

export default ProgressBar;
