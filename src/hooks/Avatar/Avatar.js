/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { View, Image, Text } from 'react-native';

// Internal dependencies
// import Image from 'hooks/Image';
import Icon from 'hooks/Icon';
import type { User } from 'state/types';
import useAvatar from './useAvatar';

type Props = {
  user: User,
};

const Avatar = React.memo((props: Props) => {
  const { bind, state, styles } = useAvatar(props);
  const { letter } = state.context;

  switch (state.value) {
    case 'image':
      return <Image style={styles.image} {...bind} />;

    case 'text':
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{letter}</Text>
        </View>
      );

    case 'icon':
      return (
        <View style={styles.container}>
          <Icon style={styles.icon} name="dash" />
        </View>
      );

    default:
      return null;
  }
});

export default Avatar;
