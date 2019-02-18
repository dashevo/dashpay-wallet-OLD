/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import './shim.js';
import process from 'process';
import crypto from 'crypto';
import stream from 'stream';
import intl from 'intl';

import { addLocaleData } from 'react-intl';
import en from 'intl/locale-data/jsonp/en';
import de from 'intl/locale-data/jsonp/de';
import es from 'intl/locale-data/jsonp/es';
addLocaleData([...en, ...de, ...es]);

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src';

AppRegistry.registerComponent(appName, () => App);
