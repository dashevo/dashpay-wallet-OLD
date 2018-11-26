/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import './shim.js';
import crypto from 'crypto';
import stream from 'stream';

import 'intl';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';
addLocaleData([...en, ...de, ...es]);

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src';

// // https://github.com/facebook/metro/issues/287
// YellowBox.ignoreWarnings(['Require cycle:']);

AppRegistry.registerComponent(appName, () => App);
