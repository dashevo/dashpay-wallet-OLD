/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { Navigation } from 'react-native-navigation';
import { forEach } from 'lodash';

export function setDefaultOptions(options) {
  Navigation.setDefaultOptions(options);
}

export function setRoot(options) {
  Navigation.setRoot(options);
}

export function registerComponent(componentName, component) {
  Navigation.registerComponent(componentName, component);
}

export function registerLaunch(listener) {
  Navigation.events().registerAppLaunchedListener(listener);
}

export function registerRoutes(routes) {
  forEach(routes, ({ name, component }) => {
    registerComponent(name, () => component);
  });
}
