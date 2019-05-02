// @flow
import PayScreen from '../containers/PayScreen';
import PayTabs from '../containers/PayTabs';
import ScannerScreen from '../containers/ScannerScreen';
import PaymentConfirmationScreen from '../containers/PaymentConfirmationScreen';

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
    navigationOptions: props => ({
      title: props.navigation.getParam(
        'name',
        props.navigation.getParam('recipient'),
      ),
      params: null,
    }),
  },
  ScannerScreen: {
    screen: ScannerScreen,
    navigationOptions: {
      title: 'Pay at the address',
      params: null,
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
