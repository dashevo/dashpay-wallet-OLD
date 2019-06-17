/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { View, Text } from 'react-native';

// Internal dependencies
import Image from 'hooks/Image';
import Icon from 'hooks/Icon';
import useAvatar from './useAvatar';

type Props = {
  lg?: boolean,
  sm?: boolean,
  styles?: Object,
  user: Object,
};

const Avatar = React.memo((props: Props) => {
  const { bind, state, styles } = useAvatar(props);
  const { letter } = state.context;

  switch (state.value) {
    case 'image':
      return (
        <View style={styles.container}>
          <Image style={styles.image} {...bind} />
        </View>
      );

    case 'text':
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{letter}</Text>
        </View>
      );

    case 'icon':
      return (
        <View style={styles.container}>
          <Icon style={styles.icon}>dash</Icon>
        </View>
      );

    default:
      return null;
  }
});

export default Avatar;
