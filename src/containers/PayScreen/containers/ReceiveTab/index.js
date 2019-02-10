/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { FlatList } from 'react-navigation';
import { connect } from 'react-redux';

// Internal dependencies
import TransactionCard from './components/TransactionCard';
import selector from './selectors';

function ReceiveTab(props) {
  return (
    <FlatList
      data={props.data}
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 10 }}
      keyExtractor={(item, index) => `pay-${index}`}
      renderItem={props => <TransactionCard {...props} />}
    />
  );
}

export default connect(selector)(ReceiveTab);
