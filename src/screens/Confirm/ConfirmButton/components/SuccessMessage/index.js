/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { View, Text } from 'react-native';

// Internal dependencies
import useTranslate from 'hooks/Translate';
import useStyles from './useStyles';

const SuccessMessage = React.memo(() => {
  const styles = useStyles();
  const translate = useTranslate();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{translate('Payment Sent')}</Text>
    </View>
  );
});

export default SuccessMessage;
