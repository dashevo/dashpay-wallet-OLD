/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
// import { Image } from 'react-native';
// import { Avatar } from 'components/avatar';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import { Navigation } from 'react-native-navigation';

const SendScreen = (props: Props): ReactElement => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.navigation.pop}>
      <Text style={styles.text}>Bo Back</Text>
    </TouchableOpacity>
  </View>
);

export default SendScreen;
