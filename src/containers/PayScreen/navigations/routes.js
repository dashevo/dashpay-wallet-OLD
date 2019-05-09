// @flow
import type NavigationProps from 'types/navigation';
import PayScreen from '../containers/PayScreen';
import PayTabs from '../containers/PayTabs';
import ScannerScreen from '../containers/ScannerScreen';
import PaymentConfirmationScreen from '../containers/PaymentConfirmationScreen';

const MAX_TITLE_LENGTH = 15;

const routes = {
  PayScreen: {
    screen: PayScreen,
    navigationOptions: {
      title: 'Pay at the address',
      params: null,
    },
  },
  PayTabs: {
    screen: PayTabs,
    navigationOptions: (props: NavigationProps) => {
      const { getParam } = props.navigation;
      let title = getParam('name', getParam('recipient')) || '';
      if (title.length > MAX_TITLE_LENGTH) {
        title = `${title.substr(0, MAX_TITLE_LENGTH)}...`;
      }
      return {
        title,
      };
    },
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
