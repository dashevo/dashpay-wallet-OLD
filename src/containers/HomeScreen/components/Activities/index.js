/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-navigation';

// Internal dependencies
import { Container } from 'components';
import View from 'components/View';
import Text from 'components/Text';
import TransactionCard from './components/TransactionCard';
import selector from './selectors';
import actions from './actions';
import styles from './styles';

function Transactions(props) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.transactions}
        keyExtractor={(item, index) => `activity-${index}`}
        renderItem={item => (
          <TransactionCard
            onAcceptBlockchainContact={props.acceptBlockchainContact}
            onRejectBlockchainContact={props.rejectBlockchainContact}
            {...item}
          />
        )}
        contentContainerStyle={styles.contentContainerStyle}
        style={{ flex: 1 }}
        ListEmptyComponent={() => (
          <View style={styles.container}>
            <Text style={styles.text}>{'No transactions.'}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default connect(
  selector,
  actions
)(Transactions);
