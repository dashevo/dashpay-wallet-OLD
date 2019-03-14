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
import { ContactsScreen } from 'containers';
import { ContactScreen } from 'containers';
import HomeScreen from 'containers/HomeScreen';
import PayScreen from 'containers/PayScreen';
import CameraRollScreen from 'containers/CameraRollScreen';
import CameraScreen from 'containers/CameraScreen';
import ActivityScreen from 'containers/ActivityScreen';

const routes = {
  HomeScreen: {
    screen: HomeScreen
  },
  ActivityScreen: {
    screen: ActivityScreen
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
  HomeScreen: {
    screen: HomeScreen
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
  }
};

export default routes;
