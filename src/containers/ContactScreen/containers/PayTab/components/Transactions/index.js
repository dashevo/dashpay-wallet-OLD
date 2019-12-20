// @flow

// External dependencies
import * as React from 'react';
import { FlatList } from 'react-navigation';

// Internal dependencies
import TransactionCard from 'hooks/Card/Transaction';

type Props = { data: object };

function keyExtractor(item) {
  return item.transactionId;
}

function renderItem({ item }: {item: Object}) {
  return <TransactionCard {...item} />;
}

function Transactions(props: Props) {
  const { data } = props;
  return (
    <FlatList
      data={data}
      style={{ flex: 1 }}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}

export default Transactions;
