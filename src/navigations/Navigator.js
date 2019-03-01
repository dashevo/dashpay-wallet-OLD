/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import * as React from 'react';
import { forVertical } from './config';
import {
  Animated,
  Easing,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  createAppContainer,
  SafeAreaView,
  StackRouter,
  createNavigator
} from 'react-navigation';
import {
  Transitioner
} from 'react-navigation-stack';
import routes from './routes';
import config from './config';

import MainMenu from './MainMenu';
import NavStatic from 'components/NavStatic';

class CustomNavigationView extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      height: 0,
      active: false
    };
  }

  render() {
    const { navigation, router, descriptors } = this.props;

    return (
      <Transitioner
        configureTransition={this._configureTransition}
        descriptors={descriptors}
        navigation={navigation}
        render={this._render}
      />
    );
  }

  _configureTransition(transitionProps, prevTransitionProps) {
    return {
      duration: 200,
      easing: Easing.out(Easing.ease)
    };
  }

  _render = (transitionProps, prevTransitionProps) => {
    const scenes = transitionProps.scenes.map(scene =>
      this._renderScene(transitionProps, scene)
    );
    return <View style={{ flex: 1 }}>{scenes}</View>;
  };

  _onLayout = event => {
    const { height: prevHeight } = this.state;
    const { height: nextHeight } = event.nativeEvent.layout;

    if (prevHeight !== nextHeight) {
      this.setState({ height: nextHeight });
    }
  };

  showMenu = () => {
    this.setState(
      {
        active: true
      },
      () => {
        Animated.spring(this.animatedValue, {
          toValue: 1
        }).start();
      }
    );
  };

  hideMenu = () => {
    this.setState(
      {
        active: true
      },
      () => {
        Animated.spring(this.animatedValue, {
          toValue: 0
        }).start();
      }
    );
  };

  _renderScene = (transitionProps, scene) => {
    const { navigation, router } = this.props;
    const { routes } = navigation.state;
    const { position } = transitionProps;
    const { index, options } = scene;

    const animatedValue = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 0]
    });

    const animation = forVertical({
      ...transitionProps,
      scene
    });

    const Scene = scene.descriptor.getComponent();
    const { height } = this.state;
    return (
      <Animated.View
        key={index}
        style={[styles.view, animation]}
        onLayout={this._onLayout}>
        <Animated.View
          style={[
            styles.view,
            { height },
            {
              transform: [
                {
                  translateY: this.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-height, 0],
                    extrapolateLeft: 'clamp',
                    useNativeDriver: true
                  })
                }
              ]
            }
          ]}>
          <MainMenu
            navigation={scene.descriptor.navigation}
            showMenu={this.showMenu}
            hideMenu={this.hideMenu}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.view,
            { height },
            {
              transform: [
                {
                  translateY: this.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, height],
                    extrapolateLeft: 'clamp',
                    useNativeDriver: true
                  })
                }
              ]
            }
          ]}>
          { scene.descriptor.options.header !== null &&
            <View style={styles.navStatic}>
              <NavStatic
                navigation={scene.descriptor.navigation}
                showMenu={this.showMenu}
              />
            </View>
          }
          <Scene
            navigation={scene.descriptor.navigation}
            showMenu={this.showMenu}
            hideMenu={this.hideMenu}
          />
        </Animated.View>
      </Animated.View>
    );
  };
}

const CustomRouter = StackRouter(routes);

const CustomTransitioner = createAppContainer(
  createNavigator(CustomNavigationView, CustomRouter, config)
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#211F24',
    borderColor: '#211F24',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  navStatic: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  }
});

export default CustomTransitioner;
