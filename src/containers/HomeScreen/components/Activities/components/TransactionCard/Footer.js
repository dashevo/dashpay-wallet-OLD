// @flow
import React from 'react';
import View from 'components/View';
import Text from 'components/Text';
import { FormattedTime } from 'react-intl';
import type { ItemWithStylesProps as Props } from './types';

const Footer = ({
  type,
  timestamp,
  styles,
}: Props) => (
  <View style={styles.footer}>
    <FormattedTime
      value={timestamp}
      year="numeric"
      month="long"
      day="numeric"
    >
      {formattedTime => (
        <Text style={styles.small}>
          {type === 'accepted' ? 'ADDED' : 'RECEIVED'}
          |
          {formattedTime}
        </Text>
      )}
    </FormattedTime>
  </View>
);

export default Footer;
