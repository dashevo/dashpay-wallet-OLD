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
  ContactScreen
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
    navigationOptions: {
      header: false,
      title: 'Developer Menu'
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: false,
      title: 'Home'
    }
  },
  ActivitiesScreen: {
    screen: ActivitiesScreen,
    navigationOptions: {
      header: true,
      title: 'Activities'
    }
  },
  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: {
      header: false,
      title: 'Registration'
    }
  },
  CameraRollScreen: {
    screen: CameraRollScreen,
    navigationOptions: {
      header: false,
      title: 'Camera Roll'
    }
  },
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions: {
      header: false,
      title: 'Camera'
    }
  },
  ContactsScreen: {
    screen: ContactsScreen,
    navigationOptions: {
      header: true,
      title: 'Contacts'
    }
  },
  ContactScreen: {
    screen: ContactScreen,
    navigationOptions: {
      header: false,
      title: 'Contact'
    }
  },
  SendScreen: {
    screen: PayScreen,
    navigationOptions: {
      header: false,
      title: 'Pay'
    }
  },
  ErrorScreen: {
    screen: ErrorScreen,
    navigationOptions: {
      header: false,
      title: 'Error'
    }
  },
  ReceiveScreen: {
    screen: ReceiveScreen,
    navigationOptions: {
      header: true,
      title: 'Receive'
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      header: false,
      title: 'Settings'
    }
  },
  SettingsLanguageScreen: {
    screen: SettingsLanguageScreen,
    navigationOptions: {
      header: false,
      title: 'Settings Language'
    }
  },
  SettingsAlternativeCurrencyScreen: {
    screen: SettingsAlternativeCurrencyScreen,
    navigationOptions: {
      header: false,
      title: 'Settings Alternative Currency'
    }
  }
};

export default routes;
