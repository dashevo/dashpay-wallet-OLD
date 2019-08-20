/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { View } from 'react-native';
import type { Interpreter } from 'xstate';

// Internal dependencies
import DashField from './components/DashField';
import FiatField from './components/FiatField';
import useStyles from './useStyles';

type Props = {
  service: Interpreter,
};

function Amount({ service }: Props) {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <DashField service={service} />
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <FiatField service={service} />
      </View>
    </View>
  );
}

export default Amount;
