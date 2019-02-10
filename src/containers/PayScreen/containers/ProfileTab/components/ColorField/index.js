/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import Field from 'components/Field';
import View from 'components/View';
import ColorPicker from 'components/ColorPicker';
import defaultProps from './defaults';

function ColorField(props) {
  return (
    <Field {...props}>
      {({ form, touchable, input, styles }) => {
        function handleChange(color) {
          form.setFieldValue(input.name, color);
        }
        return (
          <View style={styles.row}>
            <ColorPicker onChange={handleChange} {...props} />
          </View>
        );
      }}
    </Field>
  );
}

ColorField.defaultProps = defaultProps;

export default ColorField;
