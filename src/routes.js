/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';
import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import { TransactionHistoryScreen } from 'containers';
import { SettingsScreen } from 'containers';
import { SettingsLanguageScreen } from 'containers';
import { SettingsAlternativeCurrencyScreen } from 'containers';
import enhance from './enhancer';

// Examples
import { Buttons } from 'examples';
import { Form } from 'examples';

type Routes = {};

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
  },
  {
    name: 'HomeScreen',
    component: HomeScreen
  },
  {
    name: 'TransactionHistoryScreen',
    component: TransactionHistoryScreen
  },
  {
    name: 'SettingsScreen',
    component: SettingsScreen
  },
  {
    name: 'SettingsLanguageScreen',
    component: SettingsLanguageScreen
  },
  {
    name: 'SettingsAlternativeCurrencyScreen',
    component: SettingsAlternativeCurrencyScreen
  }
];

routes = routes.map(({ name, component }) => ({
  component: enhance(component),
  name: name
}));

export default routes;
