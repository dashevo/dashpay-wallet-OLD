/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import routes from './routes';
import config from './config';

const Navigator = createStackNavigator(routes, config);

// const defaultGetStateForAction = Navigator.router.getStateForAction;
// Navigator.router.getStateForAction = (action, state) => {
//   if (
//     state &&
//     action.type === 'Navigation/PUSH' &&
//     action.routeName === 'ScannerScreen'
//   ) {
//     return state;
//     const routes = [
//       ...state.routes,
//       { key: '50f1291a0c96b555506be681532ca41f', routeName: 'SendScreen' },
//       { key: 'b3a590531149944df12b89ffd9875c70', routeName: 'ScannerScreen' }
//     ];
//     return {
//       ...state,
//       routes,
//       index: routes.length - 1
//     };
//   }
//   return defaultGetStateForAction(action, state);
// };

export default createAppContainer(Navigator);
