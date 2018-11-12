/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
// import { Avatar } from 'components/avatar';
import {
  TabbedCard,
  NavBar
} from 'components';

import connect from "react-redux/es/connect/connect";
import styles from './styles';
import selector from "./selectors";
import actions from "./actions";

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

const ContactScreen = ({ navigation }: Props): ReactElement =>
  <View style={styles.container}>
    <NavBar navigation={navigation} isOpen={true} />
    <TabbedCard></TabbedCard>
  </View>

const connectedContactScreen = connect(
  selector,
  actions
)(ContactScreen);

export default connectedContactScreen;
