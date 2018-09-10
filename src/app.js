/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { Navigation } from 'react-native-navigation';
import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';

Navigation.registerComponent('SplashScreen', () => SplashScreen);
Navigation.registerComponent('HomeScreen', () => HomeScreen);

Navigation.setRoot({
  root: {
    stack: {
      id: 'DashPay',
      options: {
        statusBar: {
          style: 'light',
          backgroundColor: '#0D47A1'
        },
        layout: {
          orientation: ['portrait'],
          backgroundColor: '#0182E1'
        },
        topBar: {
          visible: false,
          animate: false,
          hideOnScroll: false,
          drawBehind: false,
          background: {
            color: '#00ff00'
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
