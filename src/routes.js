/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { SplashScreen } from 'containers';
import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import enhance from './enhancer';

let routes: Routes = [
  {
    name: 'SplashScreen',
    component: SplashScreen
  },
  {
    name: 'SendScreen',
    component: SendScreen
  },
  {
    name: 'ReceiveScreen',
    component: ReceiveScreen
  }
];

routes = routes.map(({ name, component }) => ({
  component: enhance(component),
  name: name
}));

export default routes;
