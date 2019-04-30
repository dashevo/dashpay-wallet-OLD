/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import Contacts from '../screens/Contacts';

const routes = {
  Activities: {
    screen: Contacts,
    navigationOptions: {
      title: 'Activities',
    }
  },
  Transactions: {
    screen: () => null,
    navigationOptions: {
      title: 'Transactions',
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts'
    }
  }
};

export default routes;
