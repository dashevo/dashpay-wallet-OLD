/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import {
  ReceiveScreen,
  ErrorScreen,
  SettingsScreen,
  SettingsLanguageScreen,
  SettingsAlternativeCurrencyScreen,
  ContactsScreen,
  ContactScreen,
} from 'containers';
import HomeScreen from 'containers/HomeScreen';
import RegistrationScreen from 'containers/RegistrationScreen';
import PayScreen from 'containers/PayScreen';
import CameraRollScreen from 'containers/CameraRollScreen';
import CameraScreen from 'containers/CameraScreen';
import ActivitiesScreen from 'containers/ActivitiesScreen';
import DeveloperMenuScreen from 'containers/DeveloperMenuScreen';

const routes = {
  DeveloperMenuScreen: {
    screen: DeveloperMenuScreen,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
  ActivitiesScreen: {
    screen: ActivitiesScreen,
  },
  RegistrationScreen: {
    screen: RegistrationScreen,
  },
  CameraRollScreen: {
    screen: CameraRollScreen,
  },
  CameraScreen: {
    screen: CameraScreen,
  },
  ContactsScreen: {
    screen: ContactsScreen,
  },
  ContactScreen: {
    screen: ContactScreen,
  },
  SendScreen: {
    screen: PayScreen,
  },
  ErrorScreen: {
    screen: ErrorScreen,
  },
  ReceiveScreen: {
    screen: ReceiveScreen,
  },
  SettingsScreen: {
    screen: SettingsScreen,
  },
  SettingsLanguageScreen: {
    screen: SettingsLanguageScreen,
  },
  SettingsAlternativeCurrencyScreen: {
    screen: SettingsAlternativeCurrencyScreen,
  },
};

export default routes;
