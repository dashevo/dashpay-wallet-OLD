/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';
import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import { ContactsScreen } from 'containers';
import { SettingsScreen } from 'containers';
import { StoreProvider } from 'containers';

import { COLORS } from 'constants';

import state from 'state';

function app() {
  // TODO: asynchronously
  Navigation.registerComponent('SplashScreen', () => SplashScreen);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('SendScreen', () => SendScreen);
  Navigation.registerComponent('ReceiveScreen', () => ReceiveScreen);
  Navigation.registerComponent('ContactsScreen', () => ContactsScreen);
  Navigation.registerComponentWithRedux(
    'SettingsScreen',
    () => SettingsScreen,
    StoreProvider,
    state
  );
  Navigation.setRoot({
    root: {
      stack: {
        id: 'DashPay',
        options: {
          statusBar: {
            style: 'light',
            backgroundColor: COLORS.blue
          },
          layout: {
            orientation: ['portrait'],
            backgroundColor: COLORS.gray
          },
          topBar: {
            visible: false,
            animate: false,
            hideOnScroll: false,
            drawBehind: false,
            background: {
              color: COLORS.bluedim
            }
          }
        },
        children: [
          {
            component: {
              name: 'SplashScreen'
            }
          }
        ]
      }
    }
  });
}

export default app;
