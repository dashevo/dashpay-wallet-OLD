// @flow
import * as React from 'react';
import Field from 'components/Field';
import { TouchableOpacity, Text } from 'react-native';
import submitButtonStyles from './styles';

function SubmitButton(props): React.Element<any> {
  return (
    <Field {...props} name="submitButton" styles={submitButtonStyles}>
      {({ form, styles }) => (
        <TouchableOpacity style={styles.button} onPress={form.handleSubmit}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      )}
    </Field>
  );
}

export default SubmitButton;
