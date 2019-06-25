/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { View, Text } from 'react-native';
import { FormattedNumber } from 'react-intl';

// Internal dependencies
import { DashIcon } from 'hooks/Icon';
import useTranslate from 'hooks/Translate';
import useStyles from './useStyles';

type Props = {
  dashAmount: number,
  displayName: string,
};

function PaymentDetails(props: Props) {
  const { destinationAddress } = props;
  const { dashAmount = 100, displayName = destinationAddress } = props;
  const translate = useTranslate();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.subheading}>{translate('Send')}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <DashIcon style={styles.icon} />
        <FormattedNumber value={dashAmount}>
          {number => <Text style={styles.heading}>{number}</Text>}
        </FormattedNumber>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.text} numberOfLines={1}>
          {translate('To')}
          {': '}
          {displayName}
        </Text>
      </View>
    </View>
  );
}

export default PaymentDetails;
