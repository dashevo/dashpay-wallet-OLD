/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { FlatList } from 'react-navigation';

// Internal dependencies
import View from 'components/View';
import Text from 'components/Text';
import TransactionCard from './components/TransactionCard';
import styles from './styles';

function Transactions(props) {
  return (
    <FlatList
      data={props.data}
      style={{ flex: 1 }}
      keyExtractor={(item, index) => `receive-${index}`}
      renderItem={props => <TransactionCard {...props} />}
      contentContainerStyle={styles.container}
      ListEmptyComponent={() => (
        <View style={styles.container}>
          <Text style={styles.text}>{'No transactions.'}</Text>
        </View>
      )}
    />
  );
}

export default Transactions;
