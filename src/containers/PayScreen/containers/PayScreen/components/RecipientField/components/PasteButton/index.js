/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { Clipboard } from 'react-native';
import { TouchableOpacity } from 'react-native';

// Internal dependencies
import { Button } from 'components';
import { SlideInRight } from 'components';
import { Touchable } from 'components';
import { View } from 'components';
import { Text } from 'components';
import styles from './styles';

type Props = {};

function PasteButton(props: Props): React.Element<any> {
  const children = props.confirm ? 'Pasted!' : 'Paste';
  const toValue = props.show ? 0 : 100;

  async function handlePress(event: Object) {
    try {
      const value = await Clipboard.getString();
      props.onPaste(value);
    } catch (error) {
      props.onError(error);
    }
  }

  return (
    <Button onPress={handlePress} styles={styles} {...props}>
      {({ bind, styles, touched }) => (
        <SlideInRight toValue={toValue}>
          <TouchableOpacity style={styles.container} {...bind}>
            <Text style={styles.text}>{children}</Text>
          </TouchableOpacity>
        </SlideInRight>
      )}
    </Button>
  );
}

export default PasteButton;
