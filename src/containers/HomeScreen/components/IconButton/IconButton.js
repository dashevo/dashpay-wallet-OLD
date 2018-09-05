/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { TouchableHighlight } from 'react-native';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

const IconButton = ({ source, text, action }: Props): ReactElement =>
  <TouchableHighlight style={ styles.Highlight } underlayColor='transparent' onPress={ action }>
    <View style={ styles.Container }>
      <Image source={ source } style={ styles.Image } />
      <Text style={ styles.Text }>{ text }</Text>
    </View>
  </TouchableHighlight>;

export default IconButton;
