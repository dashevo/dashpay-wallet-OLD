/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated, Easing, StyleSheet, View, BackHandler,
} from 'react-native';
import { createAppContainer, StackRouter, createNavigator } from 'react-navigation';
import { Transitioner } from 'react-navigation-stack';
import NavBar from 'components/NavBar';
import routes from './routes';

import MainMenu from './MainMenu';
import { forVertical } from './config';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  body: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    position: 'relative',
    overflow: 'hidden',
    flex: 1,
  },
});

class CustomNavigationView extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      height: 0,
      active: false,
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.onBackPressed);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  showMenu = () => {
    this.setState(
      {
        active: true,
      },
      () => {
        Animated.spring(this.animatedValue, {
          toValue: 1,
        }).start();
      },
    );
  };

  hideMenu = () => {
    this.setState(
      {
        active: true,
      },
      () => {
        Animated.spring(this.animatedValue, {
          toValue: 0,
        }).start();
      },
    );
  };

  onBackPressed = () => false; // return true if we want to override back behavior

  configureTransition = () => ({
    duration: 200,
    easing: Easing.out(Easing.ease),
  });

  renderScenes = (transitionProps) => {
    const scenes = transitionProps.scenes.map(scene => this.renderScene(transitionProps, scene));
    return <View style={{ flex: 1, position: 'relative' }}>{scenes}</View>;
  };

  onLayout = (event) => {
    const { height: prevHeight } = this.state;
    const { height: nextHeight } = event.nativeEvent.layout;

    if (prevHeight !== nextHeight) {
      this.setState({ height: nextHeight });
    }
  };

  renderScene = (transitionProps, scene) => {
    const { index } = scene;

    // const animation = forVertical({
    //   ...transitionProps,
    //   scene,
    // });

    const Scene = scene.descriptor.getComponent();
    const { active, height } = this.state;

    return (
      <Animated.View key={index} style={styles.card} onLayout={this.onLayout}>
        <Animated.View
          style={[
            styles.card,
            { height },
            {
              transform: [
                {
                  translateY: this.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-height, 0],
                    extrapolateLeft: 'clamp',
                    useNativeDriver: true,
                  }),
                },
              ],
            },
          ]}
        >
          <MainMenu
            navigation={scene.descriptor.navigation}
            showMenu={this.showMenu}
            hideMenu={this.hideMenu}
            active={active}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.card,
            { height },
            {
              transform: [
                {
                  translateY: this.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, height],
                    extrapolateLeft: 'clamp',
                    useNativeDriver: true,
                  }),
                },
              ],
            },
          ]}
        >
          {scene.descriptor.options.header && (
            <View style={styles.header}>
              <NavBar
                scene={scene}
                navigation={scene.descriptor.navigation}
                showMenu={this.showMenu}
              />
            </View>
          )}
          <View style={styles.body}>
            <Scene
              navigation={scene.descriptor.navigation}
              showMenu={this.showMenu}
              hideMenu={this.hideMenu}
              active={active}
            />
          </View>
        </Animated.View>
      </Animated.View>
    );
  };

  render() {
    const { navigation, descriptors } = this.props;

    return (
      <Transitioner
        configureTransition={this.configureTransition}
        descriptors={descriptors}
        navigation={navigation}
        render={this.renderScenes}
      />
    );
  }
}

CustomNavigationView.propTypes = {
  descriptors: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  scene: PropTypes.shape({
    descriptor: PropTypes.object.isRequired,
  }).isRequired,
};

const CustomRouter = StackRouter(routes);

const CustomTransitioner = createAppContainer(
  createNavigator(CustomNavigationView, CustomRouter, {
    transparentCard: true,
  }),
);

export default CustomTransitioner;
