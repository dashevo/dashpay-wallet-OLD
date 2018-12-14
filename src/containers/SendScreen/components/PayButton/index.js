/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Button } from 'components';
import { Touchable } from 'components';
import { View } from 'components';
import { Text } from 'components';
import { Icon } from 'components';
import type { Props } from './types';

function PayButton(props: Props): React.Element<any> {
  return null;
  if (Object.keys(props.errors).length) {
    return null; // Make room for errors.
  }
  return (
    <Button onPress={props.handleSubmit} primary {...props}>
      {({ bind, styles, touched }) => (
        <Touchable style={styles.box} {...bind}>
          <View style={styles.box}>
            <View style={styles.row}>
              <View style={styles.body}>
                <Text style={styles.text}>{'Pay'}</Text>
              </View>
            </View>
          </View>
        </Touchable>
      )}
    </Button>
  );
}

export default PayButton;
