/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';

import Avatar from 'components/Avatar';

function SmallAvatar(props) {
  return (
    <Avatar {...props} sm>
      {({ bind, touched, children, styles }) => (
        <View style={styles.container}>
          <View style={styles.body}>{children}</View>
        </View>
      )}
    </Avatar>
  );
}

function TransactionCard(props) {
  const { item } = props;
  const { dash: dashAmount, usd: fiatAmount, name, address, image } = item;
  const dashSymbol = 'dash';
  const fiatSymbol = 'usd';
  return (
    <Card onPress={() => {}}>
      {({ bind, touched, styles }) => (
        <View style={styles.tmp}>
          <Touchable {...bind}>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.row}>
                  <View style={styles.col}>
                    <SmallAvatar name={name} image={image} />
                  </View>
                  <View style={styles.col} />
                  <View style={styles.col}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{address}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.highlighted}>
                  <View style={styles.row}>
                    <View style={styles.col}>
                      <Text style={styles.title}>Icon</Text>
                    </View>
                    <View style={styles.col} />
                    <View style={styles.col}>
                      <View style={styles.row}>
                        <Icon style={styles.icon} name={fiatSymbol} />
                        <Text style={styles.text}>{fiatAmount}</Text>
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
                <Text style={styles.small}>Payed | Sep 13 2017</Text>
              </View>
            </View>
          </Touchable>
        </View>
      )}
    </Card>
  );
}

export default TransactionCard;
