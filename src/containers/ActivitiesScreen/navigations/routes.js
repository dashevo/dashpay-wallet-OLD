/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import TransactionsTab from '../containers/TransactionsTab';

const routes = {
  AllActivityTab: {
    screen: TransactionsTab,
    navigationOptions: {
      tabBarLabel: 'All Activity'
    }
  },
  TransactionsTab: {
    screen: TransactionsTab,
    navigationOptions: {
      tabBarLabel: 'Transactions'
    }
  },
  ContactsTab: {
    screen: TransactionsTab,
    navigationOptions: {
      tabBarLabel: 'Contacts'
    }
  }
};

export default routes;
