import { createMaterialTopTabNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import Pay from '../containers/PayTab';
// import Activity from '../containers/ActivityTab';
// import Profile from '../containers/ProfileTab';
// import Receive from '../containers/ReceiveTab';

import TabBar from './TabBar';

const Tabs = createMaterialTopTabNavigator(
  {
    Pay,
    // Receive,
    // Activity,
    // Profile
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      upperCaseLabel: false,
      showIcon: false,
      scrollEnabled: true
    }
  }
);

export default Tabs;
