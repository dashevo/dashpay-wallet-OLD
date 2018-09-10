/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Animatable } from 'components';
import { ProgressBar } from 'components';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import styles from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import { SharedElement } from 'components';
import { Navigation } from 'react-native-navigation';

class SplashScreen extends React.Component<Props, State> {
  static get options() {
    return {
      statusBar: {
        style: 'light',
        backgroundColor: '#0D47A1'
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

  constructor(props: Props) {
    super(props);
    this.animatable = [];
    this.animatable.push(React.createRef());
    this.animatable.push(React.createRef());
    this.navigateFurther = this.navigateFurther.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
    this.state = {
      logo: require('assets/images/logo.png'),
      progress: 0
    };
  }

  async componentDidMount() {
    await this.animatable[0].current.fadeIn(500);
    await this.animatable[1].current.fadeIn(500);
    this.setTimeoutId = setInterval(() => {
      this.setState(({ progress }) => ({ progress: progress + 1 }));
    }, 5);
  }

  componentWillUnmount() {
    clearTimeout(this.setTimeoutId);
  }

  async onCompleted() {
    clearInterval(this.setTimeoutId);
    await this.animatable[1].current.fadeOut(500);
    this.navigateFurther();
  }

  async navigateFurther() {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'HomeScreen',
        options: {
          animations: {
            push: {
              waitForRender: true,
              content: {
                alpha: {
                  from: 0, // Mandatory, initial value
                  to: 1, // Mandatory, end value
                  duration: 150, // Default value is 300 ms
                  startDelay: 0, // Default value is 0
                  interpolation: 'decelerate' // Optional
                }
              }
            }
          },
          customTransition: {
            animations: [
              {
                type: 'sharedElement',
                fromId: 'logo1',
                toId: 'logo2',
                startDelay: 0,
                duration: 1
              }
            ]
          }
        }
      }
    });
  }

  render(): ReactElement {
    const { logo } = this.state;
    const { progress } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.body}>
          <Animatable ref={this.animatable[0]}>
            <SharedElement elementId={'logo1'}>
              <Image source={logo} style={styles.logo} />
            </SharedElement>
          </Animatable>
          <View style={styles.progressBar}>
            <Animatable ref={this.animatable[1]}>
              <ProgressBar progress={progress} onCompleted={this.onCompleted} />
            </Animatable>
          </View>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
