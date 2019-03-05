/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import PayScreen from '../containers/PayScreen';
import PayTabs from '../containers/PayTabs';
import ScannerScreen from '../containers/ScannerScreen';

const routes = {
  PayScreen: {
    screen: PayScreen,
    navigationOptions: {
      title: 'Pay at the address',
      params: null
    }
  },
  PayTabs: {
    screen: PayTabs,
    navigationOptions: props => ({
      title: props.navigation.getParam(
        'name',
        props.navigation.getParam('recipient')
      ),
      params: null
    })
  },
  ScannerScreen: {
    screen: ScannerScreen,
    navigationOptions: {
      title: 'Pay at the address',
      params: null
    }
  }
};

export default routes;
