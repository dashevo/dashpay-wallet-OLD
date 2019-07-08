/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { memo } from 'react';
import { View, Text as TextRN } from 'react-native';

// Internal dependencies
import Avatar from 'hooks/Avatar';
import Formatted from 'hooks/Formatted';
import Icon from 'hooks/Icon';
import useTranslate from 'hooks/Translate';
import type { User, Transaction } from 'state/types';
import { getTitle, getSubtitle, getAddress } from './helpers';
import useStyles from './useStyles';

type Props = {
  sender: User,
  receiver: User,
  transaction: Transaction,
};

function Text(props) {
  return <TextRN {...props} numberOfLines={1} adjustsFontSizeToFit />;
}

const TransactionCard = memo((props: Props) => {
  const translate = useTranslate();
  const styles = useStyles();

  const {
    sender, receiver, type, conversion, timestamp, ...rest
  } = props;

  const { amount: dashAmount, currency: dashCurrency } = rest;
  const { amount: fiatAmount, currency: fiatCurrency } = conversion;

  const title = getTitle(translate, sender);
  const subtitle = getSubtitle(translate, type, receiver);
  const address = getAddress(translate, type, rest);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Avatar user={sender} sm />
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Avatar user={receiver} sm />
          </View>
          <View style={styles.col}>
            <View style={styles.inline}>
              <Icon style={styles.dashIcon} name={dashCurrency} />
              <Text style={styles.dashAmount}>
                <Formatted.DashAmount value={dashAmount} />
              </Text>
            </View>
            <View style={styles.inline}>
              <Icon style={styles.fiatIcon} name={fiatCurrency} />
              <Text style={styles.fiatAmount}>
                <Formatted.FiatAmount value={fiatAmount} />
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.address}>{address}</Text>
        <View style={styles.divider} />
        <Text style={styles.address}>
          <Formatted.RelativeTime value={timestamp} />
        </Text>
      </View>
    </View>
  );
});

TransactionCard.defaultProps = {
  amount: '1000000.11',
  currency: 'dash',
  fee: '1000000.11',
  address: 'XqHt831rFj5t2XqHt831',
  timestamp: 1562525599,
  type: 'RECEIVE',
  conversion: {
    amount: '1000000.11',
    currency: 'usd',
    rate: '4.2556',
  },
  sender: {
    displayName: 'Briane Foster',
    username: 'briane.foster',
    avatarUrl:
      'https://media.licdn.com/dms/image/C4E03AQH4UfZ7AEb_Zg/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=TvnxUq5-XWEuaRy1-I3HT1Bbyr6v-UbMGJhWIu8ZLUI',
  },
  receiver: {
    displayName: 'Kreshnik Alidema',
    username: 'kreshnik.alidema',
    avatarUrl:
      'https://media.licdn.com/dms/image/C5603AQEOVGd-Q8nWCg/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=rTNpWrTChkeQLuSt-G_3QiZdxGgnKS1OuqlQbBaHjG0',
  },
};

export default TransactionCard;
