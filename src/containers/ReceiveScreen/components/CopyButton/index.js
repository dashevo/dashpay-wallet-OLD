/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { Clipboard, TouchableOpacity } from 'react-native';


// Internal dependencies
import { Button } from 'components';
import { SlideInRight } from 'components';
import { Text } from 'components';
import styles from './styles';

type Props = {};

function CopyButton(props: Props): React.Element<any> {
  const children = props.confirm ? 'Copied!' : 'Copy';
  const toValue = props.show ? 0 : 100;
  const data = props.data || null;

  async function handlePress(event: Object) {
    try {
      if (!data) {
        throw new Error('Expected a data to copy!');
      }
      const value = await Clipboard.setString(data);
      if (props.onCopy) {
        props.onCopy(value);
      }
    } catch (error) {
      if (props.onError) {
        props.onError(error);
      }
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

export default CopyButton;
