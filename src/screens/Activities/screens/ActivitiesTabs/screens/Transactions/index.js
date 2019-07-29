// @flow
import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FlatList } from 'react-navigation';

import TransactionCard from 'hooks/Card/Transaction';
import TXTYPES from 'constants/txtypes';
import RadioRow from 'components/RadioRow';

import selectors from './selectors';
import styles from './styles';

type Props = {
  transactions: object[],
}
type ItemProps = {
  item: object,
}

const FILTERS = {
  ALL: [TXTYPES.SENT, TXTYPES.RECEIVED],
  SENT: [TXTYPES.SENT],
  RECEIVED: [TXTYPES.RECEIVED],
};

const Transactions = ({ transactions }: Props) => {
  const [filter, setFilter] = useState(FILTERS.ALL);

  const filteredTransactions = useMemo(
    () => transactions.filter(({ type }) => filter.includes(type)),
    [transactions, filter],
  );
  console.log(filter, filteredTransactions);

  const renderItem = ({ item }: ItemProps) => <TransactionCard {...item} />;

  return (
    <View>
      <FlatList
        data={filteredTransactions}
        keyExtractor={(item, index) => `transaction-${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        style={{ flex: 1 }}
        ListEmptyComponent={() => (
          <View style={styles.container}>
            <Text style={styles.text}>No transactions</Text>
          </View>
        )}
      />
      <RadioRow
        options={[
          { value: 'Show All', key: FILTERS.ALL },
          { value: 'Paid', key: FILTERS.SENT },
          { value: 'Received', key: FILTERS.RECEIVED },
        ]}
        currentOption="Show All"
        action={(key) => { setFilter(key); console.log('New key', key); }}
      />
    </View>
  );
};

export default connect(
  selectors,
)(Transactions);
