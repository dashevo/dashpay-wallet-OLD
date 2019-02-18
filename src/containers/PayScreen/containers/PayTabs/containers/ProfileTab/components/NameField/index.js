/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

// Internal dependencies
import Field from 'components/Field';
import View from 'components/View';
import Input from 'components/Input';
import Text from 'components/Text';
import defaultProps from './defaults';
import type { Props } from './types';

function NameField(props: Props): React.Element<any> {
  return (
    <Field {...props} name={'name'}>
      {({ form, touchable, input, styles }) => (
        <TouchableWithoutFeedback {...touchable}>
          <View style={styles.container}>
            <View style={styles.row}>
              <Input style={styles.input} {...input} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Nickname</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </Field>
  );
}

NameField.defaultProps = defaultProps;

export default NameField;
