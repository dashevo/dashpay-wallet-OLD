/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import AllActivity from '../containers/TransactionsTab';
import TransactionsTab from '../containers/TransactionsTab';
import ContactsTab from '../containers/ContactsTab';

const routes = {
  AllActivity: {
    screen: AllActivity,
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
    screen: ContactsTab,
    navigationOptions: {
      tabBarLabel: 'Contacts'
    }
  }
};

export default routes;
