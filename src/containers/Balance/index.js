/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import { IconButton } from 'components';

const Animated = require('Animated');
const I18nManager = require('I18nManager');
const PanResponder = require('PanResponder');
const React = require('React');
const PropTypes = require('prop-types');
const StyleSheet = require('StyleSheet');
/* $FlowFixMe(>=0.54.0 site=react_native_oss) This comment suppresses an error
 * found when Flow v0.54 was deployed. To see the error delete this comment and
 * run Flow. */
const TimerMixin = require('react-timer-mixin');
const View = require('View');

const createReactClass = require('create-react-class');
const emptyFunction = require('fbjs/lib/emptyFunction');

const IS_RTL = I18nManager.isRTL;

// NOTE: Eventually convert these consts to an input object of configurations

// Position of the left of the swipable item when closed
const CLOSED_LEFT_POSITION = 0;
// Minimum swipe distance before we recognize it as such
const HORIZONTAL_SWIPE_DISTANCE_THRESHOLD = 10;
// Minimum swipe speed before we fully animate the user's action (open/close)
const HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD = 0.3;
// Factor to divide by to get slow speed; i.e. 4 means 1/4 of full speed
const SLOW_SPEED_SWIPE_FACTOR = 4;
// Time, in milliseconds, of how long the animated swipe should be
const SWIPE_DURATION = 300;

/**
 * On SwipeableListView mount, the 1st item will bounce to show users it's
 * possible to swipe
 */
const ON_MOUNT_BOUNCE_DELAY = 700;
const ON_MOUNT_BOUNCE_DURATION = 400;

// Distance left of closed position to bounce back when right-swiping from closed
const RIGHT_SWIPE_BOUNCE_BACK_DISTANCE = 30;
const RIGHT_SWIPE_BOUNCE_BACK_DURATION = 300;
/**
 * Max distance of right swipe to allow (right swipes do functionally nothing).
 * Must be multiplied by SLOW_SPEED_SWIPE_FACTOR because gestureState.dx tracks
 * how far the finger swipes, and not the actual animation distance.
 */
const RIGHT_SWIPE_THRESHOLD = 30 * SLOW_SPEED_SWIPE_FACTOR;

type Props = $ReadOnly<{|
  children?: ?React.Node,
  isOpen?: ?boolean,
  maxSwipeDistance?: ?number,
  onClose?: ?Function,
  onOpen?: ?Function,
  onSwipeEnd?: ?Function,
  onSwipeStart?: ?Function,
  preventSwipeRight?: ?boolean,
  shouldBounceOnMount?: ?boolean,
  slideoutView?: ?React.Node,
  swipeThreshold?: ?number
|}>;

/**
 * Creates a swipable row that allows taps on the main item and a custom View
 * on the item hidden behind the row. Typically this should be used in
 * conjunction with SwipeableListView for additional functionality, but can be
 * used in a normal ListView. See the renderRow for SwipeableListView to see how
 * to use this component separately.
 */
const SwipeableRow = createReactClass({
  displayName: 'SwipeableRow',
  _panResponder: {},
  _previousLeft: CLOSED_LEFT_POSITION,

  mixins: [TimerMixin],

  propTypes: {
    children: PropTypes.any,
    isOpen: PropTypes.bool,
    preventSwipeRight: PropTypes.bool,
    maxSwipeDistance: PropTypes.number.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onSwipeEnd: PropTypes.func.isRequired,
    onSwipeStart: PropTypes.func.isRequired,
    // Should bounce the row on mount
    shouldBounceOnMount: PropTypes.bool,
    /**
     * A ReactElement that is unveiled when the user swipes
     */
    slideoutView: PropTypes.node.isRequired,
    /**
     * The minimum swipe distance required before fully animating the swipe. If
     * the user swipes less than this distance, the item will return to its
     * previous (open/close) position.
     */
    swipeThreshold: PropTypes.number.isRequired
  },

  getInitialState(): Object {
    return {
      currentLeft: new Animated.Value(this._previousLeft),
      /**
       * In order to render component A beneath component B, A must be rendered
       * before B. However, this will cause "flickering", aka we see A briefly
       * then B. To counter this, _isSwipeableViewRendered flag is used to set
       * component A to be transparent until component B is loaded.
       */
      isSwipeableViewRendered: false,
      rowHeight: (null: ?number)
    };
  },

  getDefaultProps(): Object {
    return {
      isOpen: false,
      preventSwipeRight: false,
      maxSwipeDistance: 0,
      onOpen: emptyFunction,
      onClose: emptyFunction,
      onSwipeEnd: emptyFunction,
      onSwipeStart: emptyFunction,
      swipeThreshold: 30
    };
  },

  UNSAFE_componentWillMount(): void {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this
        ._handleMoveShouldSetPanResponderCapture,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminationRequest: this._onPanResponderTerminationRequest,
      onPanResponderTerminate: this._handlePanResponderEnd,
      onShouldBlockNativeResponder: (event, gestureState) => false
    });
  },

  componentDidMount(): void {
    if (this.props.shouldBounceOnMount) {
      /**
       * Do the on mount bounce after a delay because if we animate when other
       * components are loading, the animation will be laggy
       */
      this.setTimeout(() => {
        this._animateBounceBack(ON_MOUNT_BOUNCE_DURATION);
      }, ON_MOUNT_BOUNCE_DELAY);
    }
  },

  UNSAFE_componentWillReceiveProps(nextProps: Object): void {
    /**
     * We do not need an "animateOpen(noCallback)" because this animation is
     * handled internally by this component.
     */
    if (this.props.isOpen && !nextProps.isOpen) {
      this._animateToClosedPosition();
    }
  },

  render(): React.Element<any> {
    // The view hidden behind the main view
    console.log('this.props.maxSwipeDistance', this.props.maxSwipeDistance);
    let slideOutView;
    if (this.state.isSwipeableViewRendered && this.state.rowHeight) {
      slideOutView = (
        <View style={styles.iconContainer}>
          <Animated.View
            onLayout={this._onSwipeableViewLayout}
            style={[
              {
                opacity: this.state.currentLeft.interpolate({
                  inputRange: [-this.props.maxSwipeDistance, 0],
                  outputRange: [0.5, 1],
                  extrapolate: 'clamp'
                }),
                transform: [
                  {
                    scale: this.state.currentLeft.interpolate({
                      inputRange: [-this.props.maxSwipeDistance, 0],
                      outputRange: [0.9, 1],
                      extrapolate: 'clamp'
                    })
                  }
                ]
              }
            ]}>
            {this.props.slideoutView}
          </Animated.View>
        </View>
      );
    }

    // The swipeable item
    const swipeableView = (
      <Animated.View
        onLayout={this._onSwipeableViewLayout}
        style={{ transform: [{ translateX: this.state.currentLeft }] }}>
        {this.props.children}
      </Animated.View>
    );

    return (
      <View {...this._panResponder.panHandlers}>
        {swipeableView}
        {slideOutView}
      </View>
    );
  },

  close(): void {
    this.props.onClose();
    this._animateToClosedPosition();
  },

  _onSwipeableViewLayout(event: Object): void {
    this.setState({
      isSwipeableViewRendered: true,
      rowHeight: event.nativeEvent.layout.height
    });
  },

  _handleMoveShouldSetPanResponderCapture(
    event: Object,
    gestureState: Object
  ): boolean {
    // Decides whether a swipe is responded to by this component or its child
    return gestureState.dy < 10 && this._isValidSwipe(gestureState);
  },

  _handlePanResponderGrant(event: Object, gestureState: Object): void {},

  _handlePanResponderMove(event: Object, gestureState: Object): void {
    if (this._isSwipingExcessivelyRightFromClosedPosition(gestureState)) {
      return;
    }

    this.props.onSwipeStart();

    if (this._isSwipingRightFromClosed(gestureState)) {
      this._swipeSlowSpeed(gestureState);
    } else {
      this._swipeFullSpeed(gestureState);
    }
  },

  _isSwipingRightFromClosed(gestureState: Object): boolean {
    const gestureStateDx = IS_RTL ? -gestureState.dx : gestureState.dx;
    return this._previousLeft === CLOSED_LEFT_POSITION && gestureStateDx > 0;
  },

  _swipeFullSpeed(gestureState: Object): void {
    this.state.currentLeft.setValue(this._previousLeft + gestureState.dx);
  },

  _swipeSlowSpeed(gestureState: Object): void {
    this.state.currentLeft.setValue(
      this._previousLeft + gestureState.dx / SLOW_SPEED_SWIPE_FACTOR
    );
  },

  _isSwipingExcessivelyRightFromClosedPosition(gestureState: Object): boolean {
    /**
     * We want to allow a BIT of right swipe, to allow users to know that
     * swiping is available, but swiping right does not do anything
     * functionally.
     */
    const gestureStateDx = IS_RTL ? -gestureState.dx : gestureState.dx;
    return (
      this._isSwipingRightFromClosed(gestureState) &&
      gestureStateDx > RIGHT_SWIPE_THRESHOLD
    );
  },

  _onPanResponderTerminationRequest(
    event: Object,
    gestureState: Object
  ): boolean {
    return false;
  },

  _animateTo(
    toValue: number,
    duration: number = SWIPE_DURATION,
    callback: Function = emptyFunction
  ): void {
    Animated.timing(this.state.currentLeft, {
      duration,
      toValue,
      useNativeDriver: true
    }).start(() => {
      this._previousLeft = toValue;
      callback();
    });
  },

  _animateToOpenPosition(): void {
    const maxSwipeDistance = IS_RTL
      ? -this.props.maxSwipeDistance
      : this.props.maxSwipeDistance;
    this._animateTo(-maxSwipeDistance);
  },

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
      (this.props.maxSwipeDistance - Math.abs(distMoved)) / speed
    );
    const maxSwipeDistance = IS_RTL
      ? -this.props.maxSwipeDistance
      : this.props.maxSwipeDistance;
    this._animateTo(-maxSwipeDistance, duration);
  },

  _animateToClosedPosition(duration: number = SWIPE_DURATION): void {
    this._animateTo(CLOSED_LEFT_POSITION, duration);
  },

  _animateToClosedPositionDuringBounce(): void {
    this._animateToClosedPosition(RIGHT_SWIPE_BOUNCE_BACK_DURATION);
  },

  _animateBounceBack(duration: number): void {
    /**
     * When swiping right, we want to bounce back past closed position on release
     * so users know they should swipe right to get content.
     */
    const swipeBounceBackDistance = IS_RTL
      ? -RIGHT_SWIPE_BOUNCE_BACK_DISTANCE
      : RIGHT_SWIPE_BOUNCE_BACK_DISTANCE;
    this._animateTo(
      -swipeBounceBackDistance,
      duration,
      this._animateToClosedPositionDuringBounce
    );
  },

  // Ignore swipes due to user's finger moving slightly when tapping
  _isValidSwipe(gestureState: Object): boolean {
    if (
      this.props.preventSwipeRight &&
      this._previousLeft === CLOSED_LEFT_POSITION &&
      gestureState.dx > 0
    ) {
      return false;
    }

    return Math.abs(gestureState.dx) > HORIZONTAL_SWIPE_DISTANCE_THRESHOLD;
  },

  _shouldAnimateRemainder(gestureState: Object): boolean {
    /**
     * If user has swiped past a certain distance, animate the rest of the way
     * if they let go
     */
    return (
      Math.abs(gestureState.dx) > this.props.swipeThreshold ||
      gestureState.vx > HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD
    );
  },

  _handlePanResponderEnd(event: Object, gestureState: Object): void {
    const horizontalDistance = IS_RTL ? -gestureState.dx : gestureState.dx;
    if (this._isSwipingRightFromClosed(gestureState)) {
      this.props.onOpen();
      this._animateBounceBack(RIGHT_SWIPE_BOUNCE_BACK_DURATION);
    } else if (this._shouldAnimateRemainder(gestureState)) {
      if (horizontalDistance < 0) {
        // Swiped left
        this.props.onOpen();
        this._animateToOpenPositionWith(gestureState.vx, horizontalDistance);
      } else {
        // Swiped right
        this.props.onClose();
        this._animateToClosedPosition();
      }
    } else {
      if (this._previousLeft === CLOSED_LEFT_POSITION) {
        this._animateToClosedPosition();
      } else {
        this._animateToOpenPosition();
      }
    }

    this.props.onSwipeEnd();
  }
});

import {
  Text,
  TouchableHighlight,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { Icon } from 'components';
import { Animation } from 'components';

class Balance extends React.Component<Props> {
  static get options() {
    return {
      statusBar: {
        style: 'light',
        backgroundColor: '#000e2e'
      },
      layout: {
        orientation: ['portrait'],
        backgroundColor: '#0182E1'
      },
      topBar: {
        // transparent: true,
        visible: false,
        animate: false,
        hideOnScroll: false,
        drawBehind: false,
        background: {
          color: '#00ff00'
        }
      }
    };
  }

  constructor(props) {
    super(props);
    this.onLayout = this.onLayout.bind(this);
    // let val = account.getBalance() = 694987737;
    // account.events.on('balance_changed', () => {})
    this.state = {
      width: 200,
      text: 'This is a test',
      index: 0,
      count: 2,
      items: [
        {
          icon: 'dash-D-blue',
          amount: {
            part1: '12,23',
            part2: '468676'
          }
        },
        {
          icon: 'dollar',
          amount: {
            part1: '4,800',
            part2: '.64'
          }
        }
      ]
    };
    this._onPress = this._onPress.bind(this);
    this.animation = React.createRef();
    this.swipeableRow = React.createRef();
  }

  _getMaxSwipeDistance(info: Object): number {
    return this.state.width;
  }

  _onOpen() {}

  _onClose() {}

  _setListViewScrollableTo(value: boolean) {
    if (this._flatListRef) {
      this._flatListRef.setNativeProps({
        scrollEnabled: value
      });
    }
  }

  _setListViewScrollable = () => {
    this._setListViewScrollableTo(true);
  };

  _setListViewNotScrollable = () => {
    this._setListViewScrollableTo(false);
  };

  onLayout(event) {
    const {
      nativeEvent: {
        layout: { x, y, width, height }
      }
    } = event;
    this.setState({ width });
  }

  async _onPress() {
    await this.animation.current.scaleOut();
    this.setState(
      ({ index, count }) => ({
        index: (index + 1) % count
      }),
      async () => {
        await this.animation.current.scaleIn();
        if (this.state.index === 0) {
          this.swipeableRow.current._animateTo(0);
        }
        if (this.state.index === 2) {
          this.swipeableRow.current._animateTo(-this.state.width);
        }
      }
    );
  }

  render() {
    const {
      icon,
      amount: { part1, part2 }
    } = this.state.items[this.state.index];
    const iconButton = (
      <Animation ref={this.animation}>
        <Icon style={styles.icon} name={icon} />
      </Animation>
    );
    return (
      <View style={styles.navbar}>
        <SwipeableRow
          slideoutView={iconButton}
          ref={this.swipeableRow}
          isOpen={false}
          maxSwipeDistance={this._getMaxSwipeDistance()}
          onOpen={() => this._onOpen()}
          onClose={() => this._onClose()}
          shouldBounceOnMount={false}
          onSwipeEnd={this._setListViewScrollable}
          onSwipeStart={this._setListViewNotScrollable}>
          <TouchableWithoutFeedback style={styles.icon} onPress={this._onPress}>
            <View style={styles.row}>
              <View style={styles.inline} onLayout={this.onLayout}>
                <Text style={styles.part1} numberOfLines={1}>
                  {part1}
                </Text>
                <Text style={styles.part2} numberOfLines={1}>
                  {part2}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SwipeableRow>
        <View style={styles.settingsIcon}>
          <IconButton
            source={require('assets/images/icon-settings.png')}
            action={() => this.props.onSettingsPress()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#011E60'
  },
  row: {
    backgroundColor: '#011E60',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 48,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    height: 64
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#011E60',
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    paddingLeft: 15
  },
  icon: {
    color: '#fff',
    fontSize: 22,
    width: 24,
    textAlign: 'center'
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  part1: {
    color: '#fff',
    fontSize: 18,
    marginRight: 4,
    opacity: 1
  },
  part2: {
    color: '#fff',
    fontSize: 16,
    marginRight: 12,
    opacity: 0.75
  },
  settingsIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
});

export default Balance;
