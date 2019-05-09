import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'hooks/Image';
import { DashIcon } from 'hooks/Icon';
import useAvatar from './useAvatar';

function Avatar(props) {
  const {
    bind, firstInitial, hasDisplayName, hasImage, styles,
  } = useAvatar(props);

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
