/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FlatList } from 'react-navigation';

// Internal dependencies
import { Container } from 'components';
import View from 'components/View';
import Icon from 'components/Icon';
import Text from 'components/Text';
import { default as SocialTransactionCard } from './components/TransactionCard';
import { default as WalletTransactionCard } from 'components/TransactionCard';
import selector from './selectors';
import actions from './actions';
import styles from './styles';

class Transactions extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPendingContactRequests();
  }

  render(): React.Element<any> {
    const {
      acceptBlockchainContact,
      rejectBlockchainContact,
      activity,
      navigation,
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={activity}
          keyExtractor={(item, index) => `activity-${index}`}
          renderItem={({item}) => {
            if (item.type === 'social') {
              return <SocialTransactionCard
                onAcceptBlockchainContact={acceptBlockchainContact}
                onRejectBlockchainContact={rejectBlockchainContact}
                item={item.data}
              />;
            } else if (item.type === 'wallet') {
              return <WalletTransactionCard item={item.data} />;
            }
          }}
          contentContainerStyle={styles.contentContainerStyle}
          style={{ flex: 1 }}
          ListEmptyComponent={() => (
            <View style={styles.container}>
              <Text style={styles.text}>{'No transactions.'}</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ActivityScreen')}>
              <Icon style={styles.buttonIcon} name={'activity'} />
              <Text style={styles.buttonText}>{'See All Activity'}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default connect(
  selector,
  actions
)(Transactions);
