// @flow
import { createMaterialTopTabNavigator } from 'react-navigation';
import routes from './navigations/routes';
import config from './navigations/config';

const navigatorRoutes = {
  ContactsPaymentTab: routes.ContactsPaymentTab,
  AddressPaymentTab: routes.AddressPaymentTab,
  QRCodePaymentTab: routes.QRCodePaymentTab,
};
const PayScreenNavigationContainer = (createMaterialTopTabNavigator(navigatorRoutes, {
  ...config,
  initialRouteName: 'AddressPaymentTab',
}));

export default PayScreenNavigationContainer;
