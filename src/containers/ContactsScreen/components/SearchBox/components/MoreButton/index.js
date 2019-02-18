/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { Field } from 'components';
import { Button } from 'components';
import { SlideInRight } from 'components';
import { Touchable } from 'components';
import { View } from 'components';
import { Text } from 'components';
import styles from './styles';

function MoreButton(props) {
  // TODO: Action Component = Button with state from Form
  return (
    <Field {...props}>
      {({ input, form }) => {
        const { isSearching } = form;
        const { visible } = form;

        const value = form.values.query;
        const error = form.errors.query;

        let show = value && !error && (isSearching || !visible);
        const text = isSearching ? 'Searching…' : 'More';

        function handlePress() {
          const { values } = form;
          form.onMore(values);
        }

        return (
          <Button styles={styles} onPress={handlePress} {...props}>
            {({ bind, styles, touched }) => (
              <SlideInRight
                toValue={show ? 0 : 100}
                style={styles.slideInRight}>
                <Touchable style={styles.touchable} {...bind}>
                  <View style={styles.container}>
                    <Text style={styles.text}>{text}</Text>
                  </View>
                </Touchable>
              </SlideInRight>
            )}
          </Button>
        );
      }}
    </Field>
  );
}

export default MoreButton;
