// @flow
import useTopTabNavigator from 'hooks/topTabNavigator/useTopTabNavigator';
import ContactsPaymentScreen from './containers/ContactsPaymentScreen';
import ScannerScreen from './containers/ScannerScreen';
import AddressPaymentScreen from './containers/AddressPaymentScreen';

const routes = {
  ContactsPaymentTab: {
    screen: ContactsPaymentScreen,
    navigationOptions: {
      tabBarLabel: 'Contacts',
    },
  },
  QRCodePaymentTab: {
    screen: ScannerScreen,
    navigationOptions: {
      tabBarLabel: 'QRCode',
    },
  },
  AddressPaymentTab: {
    screen: AddressPaymentScreen,
    navigationOptions: {
      tabBarLabel: 'Address',
    },
  },
};

const PayScreenNavigationContainer = useTopTabNavigator(routes, {
});

export default PayScreenNavigationContainer;
