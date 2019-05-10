/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import {
  FormattedTime,
  FormattedNumber,
} from 'react-intl';

// Internal dependencies
import Card from 'components/Card';
import Avatar from 'components/Avatar';
import Touchable from 'components/Touchable';
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';

function SmallAvatar(props) {
  return (
    <Avatar {...props} sm>
      {({ styles, children }) => (
        <View style={styles.container}>
          <View style={styles.body}>{children}</View>
        </View>
      )}
    </Avatar>
  );
}

type Props = {
  item: {
    dashAmount: ?string,
    fiatAmount: ?string,
    fiatSymbol: ?string,
    receiver: ?any,
    sender: ?any,
    timestamp: Date,
    transactionType: ?string,
  },
};

function TransactionCard({ item }: Props) {
  const {
    dashAmount,
    fiatAmount,
    fiatSymbol,
    receiver,
    sender,
    timestamp,
    transactionType,
  } = item;
  const dashSymbol = 'dash';
  return (
    <Card onPress={() => {}}>
      {({
        bind,
        // touched,
        styles,
      }) => (
        <View style={styles.tmp}>
          <Touchable {...bind}>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.row}>
                  <View style={styles.avatar}>
                    <SmallAvatar name={sender.name} image={sender.image} />
                  </View>
                  <View style={styles.metadata}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Text style={styles.title} numberOfLines={1}>
                        {sender.name}
                      </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Text style={styles.subtitle} numberOfLines={1}>
                        {sender.address}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.highlighted}>
                  <View style={styles.row}>
                    <View style={styles.avatar}>
                      <SmallAvatar
                        name={receiver.name}
                        image={receiver.image}
                      />
                    </View>
                    <View style={styles.metadata}>
                      <View style={styles.row}>
                        <Icon style={styles.icon} name={fiatSymbol} />
                        <FormattedNumber value={fiatAmount}>
                          {value => <Text style={styles.text}>{value}</Text>}
                        </FormattedNumber>
                      </View>
                      <View style={styles.row}>
                        <Icon style={styles.icon} name={dashSymbol} />
                        <Text style={styles.text}>{dashAmount}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.footer}>
                <FormattedTime
                  value={timestamp}
                  year="numeric"
                  month="long"
                  day="numeric"
                >
                  {formattedTime => (
                    <Text style={styles.small}>
                      {transactionType}
                      {' | '}
                      {formattedTime}
                    </Text>
                  )}
                </FormattedTime>
              </View>
            </View>
          </Touchable>
        </View>
      )}
    </Card>
  );
}

export default TransactionCard;
