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

function PayButton(props) {
  return (
    <Field {...props} name={'amount'}>
      {({ input, form }) => (
        <Button {...props}>
          {({ styles }) => (
            <TouchableOpacity onPress={form.submitForm}>
              <View style={{ padding: 32, backgroundColor: 'red' }}>
                <Text style={styles.text}>Pay</Text>
              </View>
            </TouchableOpacity>
          )}
        </Button>
      )}
    </Field>
  );
}

export default PayButton;
