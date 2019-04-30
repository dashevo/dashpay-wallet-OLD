/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { View, Image, Text } from 'react-native';

// Internal dependencies
import { DashIcon } from 'hooks/Icon';
import useAvatar from './useAvatar';

function Avatar(props) {
  const { bind, firstInitial, hasDisplayName, hasImage, styles } = useAvatar(
    props
  );

  if (hasImage) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} {...bind} />
      </View>
    );
  }

  if (hasDisplayName) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{firstInitial}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DashIcon style={styles.icon} />
    </View>
  );
}

export default Avatar;
