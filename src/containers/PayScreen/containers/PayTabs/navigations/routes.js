/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import PayTab from '../containers/PayTab';
import ReceiveTab from '../containers/ReceiveTab';
import ActivityTab from '../containers/ActivityTab';
import ProfileTab from '../containers/ProfileTab';

const routes = {
  PayTab: {
    screen: PayTab,
    navigationOptions: {
      tabBarLabel: 'Pay'
    }
  },
  ReceiveTab: {
    screen: ReceiveTab,
    navigationOptions: {
      tabBarLabel: 'Receive'
    }
  },
  ActivityTab: {
    screen: ActivityTab,
    navigationOptions: {
      tabBarLabel: 'Activity'
    }
  },
  ProfileTab: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  }
};

export default routes;
