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
import View from 'components/View';
import Avatar from 'components/Avatar';
import styles from './styles';

function ImageField(props) {
  return null;
  // return (
  //   <Field {...props}>
  //     {({ form, styles }) => {
  //       const { name, image, theme } = form.values;
  //
  //       function handlePress(evennt) {
  //       }
  //
  //       return (
  //         <View style={styles.container}>
  //           <Avatar
  //             name={'Kim Kardashian'}
  //             source={null}
  //             theme={theme}
  //             {...props}
  //             lg
  //           />
  //         </View>
  //       );
  //     }}
  //   </Field>
  // );
}

export default ImageField;
