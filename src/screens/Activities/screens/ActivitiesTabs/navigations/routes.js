/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import AllEvents from '../screens/AllEvents';
import Contacts from '../screens/Contacts';

const routes = {
  Activities: {
    screen: AllEvents,
    navigationOptions: {
      title: 'All Events',
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
