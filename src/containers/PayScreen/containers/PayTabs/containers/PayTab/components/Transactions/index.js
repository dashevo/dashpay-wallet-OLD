/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { FlatList } from 'react-navigation';

// Internal dependencies
import TransactionCard from './components/TransactionCard';

function Transactions(props) {
  return (
    <FlatList
      data={props.data}
      style={{ flex: 1 }}
      keyExtractor={(item, index) => `pay-${index}`}
      renderItem={props => <TransactionCard {...props} />}
    />
  );
}

export default Transactions
