/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { SplashScreen } from 'containers';
import { ScannerScreen } from 'containers';
import { HomeScreen } from 'containers';
import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import { ErrorScreen } from 'containers';
import { SettingsScreen } from 'containers';
import { SettingsLanguageScreen } from 'containers';
import { SettingsAlternativeCurrencyScreen } from 'containers';
import { ContactsScreen } from 'containers';
import { ContactScreen } from 'containers';
import { PaymentConfirmationScreen } from 'containers';
import PayScreen from 'containers/PayScreen';
import CameraRollScreen from 'containers/CameraRollScreen';
import CameraScreen from 'containers/CameraScreen';

const routes = {
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
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
  ScannerScreen: {
    screen: ScannerScreen
  },
  HomeScreen: {
    screen: HomeScreen
  },
  SendScreen: {
    screen: PayScreen
  },
  PaymentConfirmationScreen: {
    screen: PaymentConfirmationScreen
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
  },
};

export default routes;
