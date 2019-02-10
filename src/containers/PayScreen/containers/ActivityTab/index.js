/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { FlatList, ScrollView } from 'react-navigation';

// Internal dependencies
import { View } from 'react-native';
import { Text } from 'components';
import { Icon } from 'components';
import { Image } from 'components';
import Card from 'components/Card';
import data from './data';
import styles from './styles';

function Item(props) {
  const { item } = props;
  const { dash: dashAmount, usd: fiatAmount } = item;
  const dashSymbol = 'dash';
  const fiatSymbol = 'usd';
  return (
    <Card onPress={() => {}}>
      {({ styles }) => (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.title}>Icon</Text>
              </View>
              <View style={styles.col} />
              <View style={styles.col}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.address}</Text>
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
      )}
    </Card>
  );
}

function ReceiveTab(props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={data}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 10 }}
        keyExtractor={(item, index) => `pay-${index}`}
        renderItem={props => <Item {...props} />}
      />
    </View>
  );
}

export default ReceiveTab;
