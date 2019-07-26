// @flow

// External dependencies
import * as React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

// Internal dependencies
import View from 'components/View';
import Text from 'components/Text';
import TransactionCard from 'components/TransactionCard';

// Local dependencies
import selectors from './selectors';
import styles from './styles';

type Props = { transactions: object[] };
type State = {};

class TransactionsTab extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    (this: any).handleViewableItemsChanged = this.handleViewableItemsChanged.bind(
      this,
    );
    (this: any).renderSectionHeader = this.renderSectionHeader.bind(this);
    (this: any).keyExtractor = this.keyExtractor.bind(this);
    (this: any).renderItem = this.renderItem.bind(this);

    this.state = {};
  }

  render() {
    const { transactions } = this.props;

    return (
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => `activity-${index}`}
        renderItem={({ item }) => <TransactionCard {...item.data} />
        }
        contentContainerStyle={styles.contentContainerStyle}
        style={{ flex: 1 }}
        ListEmptyComponent={() => (
          <View style={styles.container}>
            <Text style={styles.text}>No transactions</Text>
          </View>
        )}
      />
    );
  }
}

export default connect(selectors)(TransactionsTab);
