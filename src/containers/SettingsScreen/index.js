/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'react-native';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

const SettingsScreen = ({ }: Props): ReactElement =>
  <View style={styles.container}>
    <Text style={styles.text}>Settings</Text>
  </View>;

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

const connectedSettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);

export { connectedSettingsScreen as SettingsScreen };
