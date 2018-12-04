/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';
import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import { NotificationsScreen } from 'containers';
import { SettingsScreen } from 'containers';
import { SettingsLanguageScreen } from 'containers';
import { SettingsAlternativeCurrencyScreen } from 'containers';

const routes = {
  SplashScreen: {
    screen: SplashScreen,
    cardStyle: {
      backgroundColor: '#000'
    },
    containerStyle: {
      backgroundColor: '#000'
    },
    navigationOptions: {
      cardStyle: {
        backgroundColor: '#000'
      },
      containerStyle: {
        backgroundColor: '#000'
      }
    }
  },
  HomeScreen: {
    screen: HomeScreen
  },
  SendScreen: {
    screen: SendScreen
  },
  ReceiveScreen: {
    screen: ReceiveScreen
  },
  NotificationsScreen: {
    screen: NotificationsScreen
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
