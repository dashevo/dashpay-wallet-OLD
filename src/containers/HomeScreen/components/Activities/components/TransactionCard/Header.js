// @flow
import React from 'react';
import View from 'components/View';
import Text from 'components/Text';
import Avatar from 'hooks/Avatar';
import type { ItemWithStylesProps as Props } from './types';

const Header = ({
  type,
  username,
  avatarUrl,
  styles,
}: Props) => (
  <View style={styles.header}>
    <View style={styles.row}>
      <Avatar user={{ avatarUrl }} sm />
      <View style={styles.metadata}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.title} numberOfLines={1}>
            {username}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.subtitle} numberOfLines={1}>
            {type === 'accepted' ? 'Added to Contacts' : 'Wants to be a Contact'}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default Header;
