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
  },
  ReceiveTab: {
    screen: ReceiveTab
  },
  ActivityTab: {
    screen: ActivityTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
};

export default routes;
