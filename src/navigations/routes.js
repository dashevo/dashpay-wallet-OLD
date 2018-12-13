/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';
import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import { TransactionHistoryScreen } from 'containers';
import { ErrorScreen } from "containers";
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
  ErrorScreen: {
    screen: ErrorScreen
  },
  ReceiveScreen: {
    screen: ReceiveScreen
  },
  TransactionHistoryScreen: {
    screen: TransactionHistoryScreen
  },
  TransactionHistoryScreen: {
    screen: TransactionHistoryScreen
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