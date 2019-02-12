/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { createMaterialTopTabNavigator } from 'react-navigation';

// Internal dependencies
import routes from './routes';
import config from './config';

export default createMaterialTopTabNavigator(routes, config);
