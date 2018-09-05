/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { Avatar } from 'components/avatar'

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

class HomeScreen extends React.Component<Props, State> {
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('assets/images/logo.png')} />
        <Avatar source='https://api.adorable.io/avatars/285/dashAvatar.png' />
        <Text style={styles.heading}>HomeScreen</Text>
      </View>
    );
  }
}

export default HomeScreen;
