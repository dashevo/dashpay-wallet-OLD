/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import View from 'components/View';
import Text from 'components/Text';
import styles from './styles';

function Metadata(props) {
  return (
    <View style={styles.row}>
      <Text style={styles.date}>Saved Contact</Text>
      <Text style={styles.text}>{Date.now()}</Text>
    </View>
  );
}

export default Metadata;
