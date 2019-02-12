/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import Field from 'components/Field';
import { View } from 'components';
import { Text } from 'components';
import { Input } from 'components';
import { PasteButton } from './components';
import defaultProps from './defaults';
import styles from './styles';
import type { Props } from './types';

let dismissPasteConfirmation = null;

function RecipientField(props: Props): React.Element<any> {
  return (
    <Field {...props} name={'recipient'} styles={styles}>
      {({ input, form, styles }) => {
        const { name, value } = input;
        const { showPasteConfirmation } = form.state;

        const confirm = showPasteConfirmation && value;
        const show = showPasteConfirmation || !value;

        function handlePaste(value: string) {
          form.setFieldTouched(name);
          form.setFieldValue(name, value);

          form.setFieldFocus(name);
          form.setState({
            showPasteConfirmation: true
          });

          clearTimeout(dismissPasteConfirmation);
          dismissPasteConfirmation = setTimeout(() => {
            form.setState({
              showPasteConfirmation: false
            });
          }, 4000);
        }

        function handleError(error: string) {
          form.setFieldTouched(name);
          form.setFieldError(name, error);
        }

        return (
          <View style={styles.container}>
            <View style={styles.body}>
              <Input style={styles.input} {...input} />
            </View>
            <View style={styles.right}>
              <PasteButton
                onPaste={handlePaste}
                onError={handleError}
                confirm={confirm}
                show={show}
              />
            </View>
          </View>
        );
      }}
    </Field>
  );
}

RecipientField.defaultProps = defaultProps;

export default RecipientField;
