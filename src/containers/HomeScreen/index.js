/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Avatar } from 'components';
import { Animatable } from 'components';
import { SharedElement } from 'components';
import { IconButton } from './components';
import styles from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

class HomeScreen extends React.Component<Props, State> {
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
    this.avatar = React.createRef();
    this.badge = React.createRef();
    this.buttonGroup = React.createRef();
    this.subscription = Navigation.events().bindComponent(this);
  }

  async componentDidAppear() {
    await Promise.all([
      this.avatar.current.fadeInUpBig(),
      this.buttonGroup.current.fadeInUpBig()
    ]);
    await this.badge.current.bounceIn();
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  navigate(destination) {
    return async () => Navigation.push(this.props.componentId, {
      component: {
        name: destination,
        options: {
          //TODO specify nav animation for this transition
        }
      }
    });
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>
        <SharedElement elementId={'logo2'}>
          <Image
            source={require('assets/images/logo.png')}
            style={styles.logo}
          />
        </SharedElement>
        <Animatable ref={this.avatar}>
          <View style={styles.avatar}>
            <Avatar source={require('assets/images/avatar-default.png')} />
            <View style={styles.badgeWrapper}>
              <Animatable ref={this.badge}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{'3'}</Text>
                </View>
              </Animatable>
            </View>
          </View>
        </Animatable>
        <Animatable ref={this.buttonGroup}>
          <View style={styles.buttonGroup}>
            <IconButton
              source={require('assets/images/icon-paperplane.png')}
              text="Pay"
              action={this.navigate('SendScreen')}
            />
            <IconButton
              source={require('assets/images/icon-bank.png')}
              text="Receive"
              action={this.navigate('ReceiveScreen')}
            />
            <IconButton
              source={require('assets/images/icon-people.png')}
              text="Contacts"
              action={this.navigate('ContactsScreen')}
            />
            <IconButton
              source={require('assets/images/icon-settings.png')}
              text="Settings"
              action={this.navigate('SettingsScreen')}
            />
          </View>
        </Animatable>
      </View>
    );
  }
}

export { HomeScreen };
