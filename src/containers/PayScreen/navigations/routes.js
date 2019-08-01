// @flow
import AddressPaymentScreen from '../containers/AddressPaymentScreen';
import ScannerScreen from '../containers/ScannerScreen';
import PaymentConfirmationScreen from '../containers/PaymentConfirmationScreen';
import ContactsPaymentScreen from '../containers/ContactsPaymentScreen';

const routes = {
  ScannerScreen: {
    screen: ScannerScreen,
    navigationOptions: {
      header: null,
    },
  },
  PaymentConfirmationScreen: {
    screen: PaymentConfirmationScreen,
    navigationOptions: {
      header: null,
    },
  },
  ContactsPaymentTab: {
    screen: ContactsPaymentScreen,
    navigationOptions: {
      tabBarLabel: 'Contacts',
    },
  },
  AddressPaymentTab: {
    screen: AddressPaymentScreen,
    navigationOptions: {
      tabBarLabel: 'Address',
    },
  },
  QRCodePaymentTab: {
    screen: ScannerScreen,
    navigationOptions: {
      tabBarLabel: 'QRCode',
    },
  },
};

export default routes;
