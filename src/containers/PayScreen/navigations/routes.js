// @flow
import type { NavigationProps } from 'types/navigation';
import AddressPaymentScreen from '../containers/AddressPaymentScreen';
import { PayTabs, ProfileTabs } from '../containers/PayTabs';
import ScannerScreen from '../containers/ScannerScreen';
import PaymentConfirmationScreen from '../containers/PaymentConfirmationScreen';
import ContactsPaymentScreen from '../containers/ContactsPaymentScreen';

const MAX_TITLE_LENGTH = 15;

const routes = {
  PayTabs: {
    screen: PayTabs,
    navigationOptions: (props: NavigationProps) => {
      const { getParam } = props.navigation;
      let title = getParam('name', getParam('username'));
      if (title && title.length > MAX_TITLE_LENGTH) {
        title = `${title.substr(0, MAX_TITLE_LENGTH)}...`;
      }
      return {
        title,
      };
    },
  },
  ProfileTabs: {
    screen: ProfileTabs,
  },
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
      tabBarLabel: 'Pay to contact',
    },
  },
  AddressPaymentTab: {
    screen: AddressPaymentScreen,
    navigationOptions: {
      tabBarLabel: 'Pay to address',
    },
  },
  QRCodePaymentTab: {
    screen: ScannerScreen,
    navigationOptions: {
      tabBarLabel: 'Pay to QRCode',
    },
  },
};

export default routes;
