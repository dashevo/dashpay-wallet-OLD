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
import { THEMES } from 'constants';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

const IconButton = ({ source, text, action, theme }: Props): ReactElement => {
  computedStyle = styles(theme);
  return (
    <TouchableHighlight
      style={computedStyle.highlight}
      underlayColor="transparent"
      onPress={action}>
      <View style={computedStyle.container}>
        <Image source={source} style={computedStyle.image} />
        <Text style={computedStyle.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  )
};

export { IconButton };