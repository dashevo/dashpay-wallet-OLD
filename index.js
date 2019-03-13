/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { AppRegistry } from 'react-native';
import { addLocaleData } from 'react-intl';

import intl from 'intl';
import en from 'intl/locale-data/jsonp/en';
import de from 'intl/locale-data/jsonp/de';
import es from 'intl/locale-data/jsonp/es';

// Internal dependencies
import './shim';
import { name as appName } from './app.json';
import { App } from './src';

addLocaleData([...en, ...de, ...es]);

AppRegistry.registerComponent(appName, () => App);
