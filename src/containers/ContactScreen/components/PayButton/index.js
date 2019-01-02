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
import type { Props } from './types';

function PayButton(props: Props): React.Element<any> {
  // TODO: Action Component = Button with state from Form
  return (
    <Field {...props}>
      {({ form }) => {
        if (Object.keys(form.errors).length > 0) {
          return null;
        }

        return (
          <Button onPress={form.handleSubmit} primary {...props}>
            {({ bind, styles, touched }) => (
              <Touchable style={styles.box} {...bind}>
                <View style={styles.box}>
                  <Text style={styles.text}>{'Pay'}</Text>
                </View>
              </Touchable>
            )}
          </Button>
        );
      }}
    </Field>
  );
}

export default PayButton;
