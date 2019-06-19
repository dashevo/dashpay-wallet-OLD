// @flow
import * as React from 'react';
import Avatar from 'hooks/Avatar';
import View from 'components/View';
import Icon from 'components/Icon';
import Text from 'components/Text';
import type { Props } from './types';
import useStyles from './useStyles';

function ProfilePicture(props: Props) {
  const { user } = props;
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar user={user} lg />
      </View>
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={1}>
          {user.displayName}
        </Text>
      </View>
    </View>
  );
}

export default ProfilePicture;
