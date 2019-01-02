/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Field } from 'components';
import { Button } from 'components';
import { Touchable } from 'components';
import { View } from 'components';
import { Text } from 'components';
import styles from "./styles"
import type { Props } from './types';

function ErrorMessage(props: Props): React.Element<any> {
  // TODO: ErrorMessage generic component
  return (
    <Field {...props}>
      {({ form }) => {
        if (Object.keys(form.errors).length === 0) {
          return null;
        }

        const errorMessage = form.errors[Object.keys(form.errors)[0]]

        return (
          <View style={styles.box}>
            <Text style={styles.text}>{errorMessage}</Text>
          </View>
        );
      }}
    </Field>
  );
}

export default ErrorMessage;
