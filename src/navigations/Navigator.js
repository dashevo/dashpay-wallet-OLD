/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import routes from './routes';
import config from './config';

const Navigator = createStackNavigator(routes, config);

export default Navigator;
