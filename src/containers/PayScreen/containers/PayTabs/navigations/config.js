/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import TabBar from './TabBar';

const config = {
  mode: 'card',
  transparentCard: true,
  cardStyle: {
    backgroundColor: 'transparent',
  },
  containerStyle: {
    backgroundColor: 'transparent',
  },
  tabBarComponent: TabBar,
  tabBarOptions: {
    upperCaseLabel: false,
    showIcon: false,
    scrollEnabled: false,
  },
};

export default config;
