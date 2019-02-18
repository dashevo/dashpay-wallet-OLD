/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

// Internal dependencies
import Touchable from 'components/Touchable';
import Field from 'components/Field';
import Avatar from 'components/Avatar';
import View from 'components/View';
import Icon from 'components/Icon';
import Text from 'components/Text';
import styles from './styles';

function ImageField(props) {
  return (
    <Field {...props} name={'image'}>
      {({ form, styles }) => {
        const { name, image, recipient } = form.values;

        function onPress(event) {
          form.navigation.navigate('CameraRollScreen', {
            onSelect: image =>
              form.setFieldValue('image', image.selected[0].uri)
          });
        }

        return (
          <Avatar name={name} image={image} {...props}>
            {({ children, bind, styles }) => (
              <Touchable onPress={onPress}>
                <View style={styles.col}>
                  <View style={styles.center}>
                    <View style={styles.container}>
                      <View style={styles.body}>{children}</View>
                      <View style={styles.left}>
                        <Touchable
                          {...bind}
                          hitSlop={{
                            bottom: 10,
                            left: 10,
                            right: 10,
                            top: 10
                          }}>
                          <Icon style={styles.icon} name={'dash'} />
                        </Touchable>
                      </View>
                    </View>
                  </View>
                </View>
              </Touchable>
            )}
          </Avatar>
        );
      }}
    </Field>
  );
}

export default ImageField;
