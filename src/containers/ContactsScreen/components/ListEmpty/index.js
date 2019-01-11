/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { View } from 'components';
import { Text } from 'components';
import { TouchableOpacity } from 'components';
import type { Props } from './types';
import styles from './styles';

function ListEmpty(props: Props): React.Element<any> {
  const { query } = props;
  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <Text style={styles.text}>
          <Text>{'Your search - '}</Text>
          <Text style={styles.bold}>{query}</Text>
          <Text>{' - did not match any contact.'}</Text>
        </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{'Add to contacts'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ListEmpty;
