/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import PayScreen from '../containers/PayScreen';
import PayTabs from '../containers/PayTabs';

const routes = {
  PayScreen: {
    screen: PayScreen,
    navigationOptions: {
      title: 'Pay at the address'
    }
  },
  PayTabs: {
    screen: PayTabs,
    navigationOptions: props => ({
      title: props.navigation.getParam(
        'name',
        props.navigation.getParam('recipient')
      )
    })
  }
};

export default routes;
