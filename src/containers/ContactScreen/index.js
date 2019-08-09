import { createMaterialTopTabNavigator } from 'react-navigation';
import routes from './navigations/routes';
import config from './navigations/config';

const ContactScreenNavigationContainer = (createMaterialTopTabNavigator(routes, {
  ...config,
  initialRouteName: 'ProfileTab',
}));

export const PayTabs = createMaterialTopTabNavigator(routes, config);

export default ContactScreenNavigationContainer;
