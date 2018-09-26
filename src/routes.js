/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';
import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import { SettingsScreen } from 'containers';
import enhance from './enhancer';

type Routes = {};

let routes: Routes = [
  {
    name: 'SplashScreen',
    component: i18n
  },
  {
    name: 'SendScreen',
    component: SendScreen
  },
  {
    name: 'ReceiveScreen',
    component: ReceiveScreen
  },
  {
    name: 'HomeScreen',
    component: HomeScreen
  },
  {
    name: 'SettingsScreen',
    component: SettingsScreen
  }
];

routes = routes.map(({ name, component }) => ({
  component: enhance(component),
  name: name
}));

export default routes;
