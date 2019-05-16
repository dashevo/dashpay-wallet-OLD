// @flow
import React from 'react';
import Avatar from 'components/Avatar';
import View from 'components/View';
import Text from 'components/Text';
import type { Props } from './types';

const ProfilePic = (props: Props) => (
  <Avatar {...props} theme="red" tmp>
    {({ children, styles }) => (
      <View style={styles.col}>
        <View style={styles.center}>
          <View style={styles.container}>
            <View style={styles.body}>{children}</View>
          </View>
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{props.username}</Text>
        </View>
      </View>
    )}
  </Avatar>
);

export default ProfilePic;
