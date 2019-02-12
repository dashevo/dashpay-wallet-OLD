/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Animated } from 'react-native';

class SlideInUp extends React.PureComponent {
  static defaultProps = {
    duration: 400
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      ...this.props,
      toValue: 1,
      useNativeDriver: true
    }).start();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.toValue !== this.props.toValue) {
      Animated.timing(this.animatedValue, {
        ...this.props,
        toValue: 1,
        useNativeDriver: true
      }).start();
    }
  }

  render() {
    const style = this.props.style;
    const animatedStyle = {
      opacity: this.animatedValue,
      transform: [
        {
          translateY: this.animatedValue.interpolate({
            outputRange: [this.props.fromValue, 0],
            inputRange: [0, 1]
          })
        }
      ]
    };
    return <Animated.View {...this.props} style={[style, animatedStyle]} />;
  }
}

export default SlideInUp;
