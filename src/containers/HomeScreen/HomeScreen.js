/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { Avatar } from 'components/avatar';
import { IconButton } from './components/IconButton';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

class HomeScreen extends React.Component<Props, State> {
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('assets/images/logo.png')} />
        <Avatar source={require('assets/images/avatar-default.png')} />
        <View style={styles.buttonContainer}>
          <IconButton
            source={require('assets/images/icon-paperplane.png')}
            text="Pay"
            action={() => {}}
          />
          <IconButton
            source={require('assets/images/icon-bank.png')}
            text="Receive"
            action={() => {}}
          />
          <IconButton
            source={require('assets/images/icon-people.png')}
            text="Contacts"
            action={() => {}}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
