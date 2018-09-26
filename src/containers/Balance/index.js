import React, { Component } from 'react';
import { StyleSheet, PanResponder, Animated, View, Text } from 'react-native';
import styles from './styles';
import shallowEqual from 'fbjs/lib/shallowEqual';

const OPEN_POSITION = 0;
const SWIPE_DURATION = 300;
const emptyFunction = require('fbjs/lib/emptyFunction');
const HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD = 0.3;

export default class realworld extends Component {
  constructor(props) {
    super(props);
    this._previousPosition = 0;
    this.animated = new Animated.Value(this._previousPosition);
    this.state = {
      layout: {
        height: 0,
        width: 0,
        y: 0,
        x: 0
      }
    };

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return this._previousPosition >= -this.state.layout.width;
      },
      onPanResponderMove: (e, gestureState) => {
        const { dx } = gestureState;
        this.animated.setValue(this._previousPosition + gestureState.dx);
      },
      onPanResponderRelease: (e, gestureState) => {
        const { dx } = gestureState;

        console.log(
          'this._previousPosition, this.state.layout.width',
          this._previousPosition,
          this.state.layout.width
        );

        if (this._previousPosition === 0 && gestureState.dx > 0) {
          this._animateTo(0);
          console.log('is swiping right from open');
        } else if (this._previousPosition === 0 && gestureState.dx < 0) {
          this._animateTo(-this.state.layout.width);
          console.log('is swiping left from open');
        } else if (
          this._previousPosition === -this.state.layout.width &&
          gestureState.dx < 0
        ) {
          console.log('is swiping left from close');
          this._animateTo(-this.state.layout.width);
        } else {
          this._animateTo(0);
          console.log('is swiping right from close');
        }

        // if (this._previousPosition === OPEN_POSITION) {
        //   this._animateToOpenPosition();
        // } else {
        //   this._animateToClosedPosition();
        // }

        // if (this._isSwipingRightFromOpen(gestureState)) {
        //   this._animateTo(OPEN_POSITION, 300);
        // } else if (this._shouldAnimateRemainder(gestureState)) {
        //
        //   // if (gestureState.dx < 0) {
        //   //   this._animateToOpenPositionWith(gestureState.vx, gestureState.dx);
        //   // } else {
        //   //   this._animateToClosedPosition();
        //   // }
        // } else {
        //   if (this._previousPosition === OPEN_POSITION) {
        //     this._animateToClosedPosition();
        //   } else {
        //     this._animateToOpenPosition();
        //   }
        // }
      }
    });
  }

  _animateToOpenPositionWith(speed: number, distMoved: number): void {
    /**
     * Ensure the speed is at least the set speed threshold to prevent a slow
     * swiping animation
     */
    speed =
      speed > HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD
        ? speed
        : HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD;
    /**
     * Calculate the duration the row should take to swipe the remaining distance
     * at the same speed the user swiped (or the speed threshold)
     */
    const duration = Math.abs(
      (this.state.layout.width - Math.abs(distMoved)) / speed
    );
    const maxSwipeDistance = this.state.layout.width;
    this._animateTo(-maxSwipeDistance, duration);
  }

  _shouldAnimateRemainder(gestureState: Object): boolean {
    /**
     * If user has swiped past a certain distance, animate the rest of the way
     * if they let go
     */
    return (
      Math.abs(gestureState.dx) > this.state.layout.width ||
      gestureState.vx > HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD
    );
  }

  _isSwipingRightFromOpen(gestureState: Object): boolean {
    return this._previousPosition === OPEN_POSITION && gestureState.dx > 0;
  }

  _animateTo(
    toValue: number,
    duration: number = SWIPE_DURATION,
    callback: Function = emptyFunction
  ): void {
    Animated.timing(this.animated, {
      duration,
      toValue,
      useNativeDriver: true
    }).start(() => {
      this._previousPosition = toValue;
      callback();
    });
  }

  _animateToOpenPosition(duration: number = SWIPE_DURATION): void {
    this._animateTo(OPEN_POSITION);
  }

  _animateToClosedPosition() {
    const { layout } = this.state;
    const { width } = layout;
    this._animateTo(-width);
  }

  onLayout = (event: Object) => {
    const { layout: prevLayout } = this.state;
    const { layout: nextLayout } = event.nativeEvent;

    if (!shallowEqual(prevLayout, nextLayout)) {
      this.setState({ layout: nextLayout });
    }
  };

  render() {
    const { symbol = 'symbol' } = this.state;
    const { amount = '10.000' } = this.state;
    const { layout } = this.state;

    const opacityInterpolate = this.animated.interpolate({
      inputRange: [0, this.state.layout.width],
      outputRange: [0, 1]
    });

    const modalStyle = {
      transform: [{ translateX: this.animated }]
      // opacity: opacityInterpolate
    };

    return (
      <View style={styles.container}>
        <View style={styles.symbol}>
          <Text>{symbol}</Text>
        </View>
        <Animated.View
          onLayout={this.onLayout}
          style={[styles.amount, modalStyle]}
          {...this.panResponder.panHandlers}>
          <Text>{amount}</Text>
        </Animated.View>
      </View>
    );
  }
}
