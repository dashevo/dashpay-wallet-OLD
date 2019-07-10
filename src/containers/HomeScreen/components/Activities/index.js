// @flow
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FlatList } from 'react-navigation';
import View from 'components/View';
import Icon from 'components/Icon';
import Text from 'components/Text';
import SocialTransactionCard from './components/TransactionCard';
import TransactionCard from 'hooks/Card/Transaction';
import selector from './selectors';
import actions from './actions';
import styles from './styles';
import type { Props } from './types';

const Transactions = (props: Props) => {
  const {
    getPendingRequests,
    acceptRequest,
    rejectRequest,
    activity,
    navigation: navigate,
  } = props;

  useEffect(() => {
    getPendingRequests();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={activity}
        keyExtractor={(item, index) => `activity-${index}`}
        renderItem={({ item }) => {
          console.log('__item.data__', item.data);
          switch (item.type) {
            case 'social':
              return (
                <SocialTransactionCard
                  acceptRequest={acceptRequest}
                  rejectRequest={rejectRequest}
                  item={item.data}
                />
              );
            case 'wallet':
              return <TransactionCard {...item.data} />;
            default:
              return null;
          }
        }}
        contentContainerStyle={styles.contentContainerStyle}
        style={{ flex: 1 }}
        ListEmptyComponent={() => (
          <View style={styles.container}>
            <Text style={styles.text}>No transactions</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.button} onPress={() => navigate('ActivityScreen')}>
            <Icon style={styles.buttonIcon} name="activity" />
            <Text style={styles.buttonText}>See All Activity</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default connect(
  selector,
  actions,
)(Transactions);
