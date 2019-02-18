/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import TabBar from './TabBar';

const config = {
  mode: 'card',
  cardStyle: {
    backgroundColor: '#fff'
  },
  containerStyle: {
    backgroundColor: '#fff'
  },
  tabBarComponent: TabBar,
  tabBarOptions: {
    upperCaseLabel: false,
    showIcon: false,
    scrollEnabled: true
  }
};

export default config;
