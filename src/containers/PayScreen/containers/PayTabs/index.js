import { createMaterialTopTabNavigator } from 'react-navigation';
import routes from './navigations/routes';
import config from './navigations/config';

export const PayTabs = createMaterialTopTabNavigator(routes, config);

export const ProfileTabs = createMaterialTopTabNavigator(routes, {
  ...config,
  initialRouteName: 'ProfileTab',
});
