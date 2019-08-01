// import PayScreen from './navigations';
//
// export default PayScreen;

// @flow
import * as React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import routes from './navigations/routes';
import config from './navigations/config';
import selector from './selectors';

const navigatorRoutes = {
  ContactsPaymentTab: routes.ContactsPaymentTab,
  AddressPaymentTab: routes.AddressPaymentTab,
  QRCodePaymentTab: routes.QRCodePaymentTab,
};
const PayScreenNavigationContainer = createAppContainer(createMaterialTopTabNavigator(navigatorRoutes, {
  ...config,
  initialRouteName: 'AddressPaymentTab',
}));

const PayScreen = props => (
  <PayScreenNavigationContainer />
);

export default connect(selector)(PayScreen);
