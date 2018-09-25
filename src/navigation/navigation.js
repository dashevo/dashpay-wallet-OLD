/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { Navigation } from 'react-native-navigation';

export const navigation = ({ componentId }) => ({
  componentId,
  push(routeName, parameters = {}) {
    return Navigation.push(componentId, {
      component: {
        name: routeName,
        passProps: {
          parameters
        }
      }
    });
  },
  pop(routeName, parameters = {}) {
    return Navigation.pop(componentId);
  }
});
