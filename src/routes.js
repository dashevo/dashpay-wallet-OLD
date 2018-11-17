/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';
import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import { ContactScreen } from 'containers';
import { TransactionHistoryScreen } from 'containers';
import { SettingsScreen } from 'containers';
import { SettingsLanguageScreen } from 'containers';
import { SettingsCurrencyScreen } from 'containers';
import enhance from './enhancer';

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
    name: 'ContactsScreen',
    component: ContactScreen
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
    name: 'SettingsCurrencyScreen',
    component: SettingsCurrencyScreen
  },
];

routes = routes.map(({ name, component }) => ({
  component: enhance(component),
  name: name
}));

export default routes;
