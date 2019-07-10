// @flow
import React from 'react';
import Avatar from 'hooks/Avatar';
import View from 'components/View';
import Text from 'components/Text';
import type { Props } from './types';
import useStyles from './useStyles';

const ProfilePicture = (({ user }): Props) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar user={user} lg />
      </View>
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={1}>
          {user.username}
        </Text>
      </View>
    </View>
  );
};

export default ProfilePicture;
