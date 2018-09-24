/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { SplashScreen } from 'containers';
import { SendScreen } from 'containers';
import enhance from './enhancer';

export default [
  {
    routeName: 'SplashScreen',
    routeComponent: enhance(SplashScreen)
  },
  {
    routeName: 'SendScreen',
    routeComponent: enhance(SendScreen)
  }
];
