/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

// Internal dependencies
import Button from 'components/Button';
import Field from 'components/Field';
import View from 'components/View';
import Text from 'components/Text';

function RemoveButton(props) {
  return (
    <Button {...props} sm>
      {({ styles }) => (
        <Field {...props}>
          {({ form, touchable }) => {
            function onPress(event) {
              form.onDelete(form.values);
            }
            return (
              <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>Remove Contact</Text>
              </TouchableOpacity>
            );
          }}
        </Field>
      )}
    </Button>
  );
}

export default RemoveButton;
