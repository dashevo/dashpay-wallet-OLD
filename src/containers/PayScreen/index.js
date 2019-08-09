// @flow
import { createMaterialTopTabNavigator } from 'react-navigation';
import routes from './navigations/routes';
import config from './navigations/config';

const navigatorRoutes = {
  ContactsPaymentTab: routes.ContactsPaymentTab,
  QRCodePaymentTab: routes.QRCodePaymentTab,
  AddressPaymentTab: routes.AddressPaymentTab,
};
const PayScreenNavigationContainer = (createMaterialTopTabNavigator(navigatorRoutes, {
  ...config,
  initialRouteName: 'AddressPaymentTab',
}));

export default PayScreenNavigationContainer;
