/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import { ErrorScreen } from 'containers';
import { SettingsScreen } from 'containers';
import { SettingsLanguageScreen } from 'containers';
import { SettingsAlternativeCurrencyScreen } from 'containers';
import { ContactsScreen } from 'containers';
import { ContactScreen } from 'containers';
import HomeScreen from 'containers/HomeScreen';
import PayScreen from 'containers/PayScreen';
import CameraRollScreen from 'containers/CameraRollScreen';
import CameraScreen from 'containers/CameraScreen';
import ActivitiesScreen from 'containers/ActivitiesScreen';

const routes = {
  HomeScreen: {
    screen: HomeScreen
  },
  ActivitiesScreen: {
    screen: ActivitiesScreen
  },
  CameraRollScreen: {
    screen: CameraRollScreen
  },
  CameraScreen: {
    screen: CameraScreen
  },
  ContactsScreen: {
    screen: ContactsScreen
  },
  ContactScreen: {
    screen: ContactScreen
  },
  SendScreen: {
    screen: PayScreen
  },
  ErrorScreen: {
    screen: ErrorScreen
  },
  ReceiveScreen: {
    screen: ReceiveScreen
  },
  SettingsScreen: {
    screen: SettingsScreen
  },
  SettingsLanguageScreen: {
    screen: SettingsLanguageScreen
  },
  SettingsAlternativeCurrencyScreen: {
    screen: SettingsAlternativeCurrencyScreen
  }
};

export default routes;
