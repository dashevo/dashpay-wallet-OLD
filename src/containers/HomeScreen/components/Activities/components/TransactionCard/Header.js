// @flow
import React from 'react';
import View from 'components/View';
import Text from 'components/Text';
import SmallAvatar from './SmallAvatar';
import type { ItemWithStylesProps as Props } from './types';

const Header = ({
  type,
  address,
  image,
  styles,
}: Props) => (
  <View style={styles.header}>
    <View style={styles.row}>
      <SmallAvatar name={address} image={image} />
      <View style={styles.metadata}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.title} numberOfLines={1}>
            {address}
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
