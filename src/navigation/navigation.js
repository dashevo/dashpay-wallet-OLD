/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { Navigation } from 'react-native-navigation';

export const navigation = ({ componentId }) => ({
  componentId,
  push(routeName, options = {}) {
    return Navigation.push(componentId, {
      component: {
        name: routeName,
        options
      }
    });
  },
  pop(routeName, options = {}) {
    return Navigation.pop(componentId);
  },
  resetTo(routeName, options = {}) {
    return Navigation.setStackRoot(componentId, {
      component: {
        name: routeName,
        options
      }
    })
  }
});
