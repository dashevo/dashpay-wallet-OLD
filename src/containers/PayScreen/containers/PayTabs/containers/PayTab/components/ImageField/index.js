/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

// Internal dependencies
import Field from 'components/Field';
import Avatar from 'components/Avatar';
import View from 'components/View';
import Icon from 'components/Icon';
import Text from 'components/Text';
import styles from './styles';

function ImageField(props) {
  const { initialValues = {} } = props;
  const { name, recipient, image } = initialValues;
  return (
    <Avatar name={name} image={image}>
      {({ children, styles }) => (
        <View style={styles.col}>
          <View style={styles.center}>
            <View style={styles.container}>
              <View style={styles.body}>{children}</View>
              <View style={styles.left}>
                <Icon style={styles.icon} name={'dash'} />
              </View>
            </View>
          </View>
          {name ? (
            <View style={styles.center}>
              <Text style={styles.title} numberOfLines={1}>
                {name}
              </Text>
            </View>
          ) : (
            <View style={styles.center}>
              <Text style={styles.title} numberOfLines={1}>
                {recipient}
              </Text>
            </View>
          )}
        </View>
      )}
    </Avatar>
  );
}

export default ImageField;
