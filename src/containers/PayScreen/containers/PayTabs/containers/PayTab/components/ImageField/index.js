// @flow
import * as React from 'react';
import Avatar from 'components/Avatar';
import View from 'components/View';
import Icon from 'components/Icon';
import Text from 'components/Text';
import type { Props } from './types';

function ImageField(props: Props) {
  const {
    initialValues: {
      name,
      recipient,
      image,
    },
  } = props;
  const displayName = name || recipient;
  return (
    <Avatar name={name} image={image}>
      {({ children, styles }) => (
        <View style={styles.col}>
          <View style={styles.center}>
            <View style={styles.container}>
              <View style={styles.body}>{children}</View>
              <View style={styles.left}>
                <Icon style={styles.icon} name="dash" />
              </View>
            </View>
          </View>
          <View style={styles.center}>
            <Text style={styles.title} numberOfLines={1}>
              {displayName}
            </Text>
          </View>
        </View>
      )}
    </Avatar>
  );
}

export default ImageField;
