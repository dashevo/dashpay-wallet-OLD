/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from 'react-native';
// import { Image } from 'react-native';
// import { Avatar } from 'components/avatar';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

const ContactsScreen = ({ }: Props): ReactElement =>
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Send</Text>
  </SafeAreaView>

export default ContactsScreen;
