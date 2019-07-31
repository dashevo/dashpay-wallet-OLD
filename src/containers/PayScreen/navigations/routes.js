// @flow
import type { NavigationProps } from 'types/navigation';
import PayToAddressScreen from '../containers/PayToAddressScreen';
import { PayTabs, ProfileTabs } from '../containers/PayTabs';
import ScannerScreen from '../containers/ScannerScreen';
import PaymentConfirmationScreen from '../containers/PaymentConfirmationScreen';

const MAX_TITLE_LENGTH = 15;

const routes = {
  PayToAddressScreen: {
    screen: PayToAddressScreen,
    navigationOptions: {
      title: 'Pay to address',
      params: null,
    },
  },
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
};

export default routes;
