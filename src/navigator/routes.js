/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';
import { SendScreen } from 'containers';
import { ReceiveScreen } from 'containers';
import { ContactsScreen } from 'containers';

const routes = {
  Home: {
    screen: HomeScreen
  },
  Splash: {
    screen: SplashScreen
  },
  Send: {
    screen: SendScreen
  },
  Receive: {
    screen: ReceiveScreen
  },
  Contacts: {
    screen: ContactsScreen
  }
};

export default routes;
