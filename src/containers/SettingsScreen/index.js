/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
// import { Image } from 'react-native';
// import { Avatar } from 'components/avatar';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type {State} from "../ReceiveScreen/types";
import connect from "react-redux/es/connect/connect";
import selector from "./selectors";
import actions from "./actions";

import { RadioRow, LabeledSwitch, ThemedButton } from 'components';

class SettingsScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.Element<any> {
    const navigate = this.props.navigation.navigate;
    const { balanceVisible, changeBalanceVisible } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Settings</Text>
        <View style={styles.content}>
          <ThemedButton
            title='Languages'
            onPress={ () => navigate('SettingsLanguageScreen') } />
          <ThemedButton
            title='Currency'
            onPress={ () => navigate('SettingsAlternativeCurrencyScreen') } />
          <LabeledSwitch
            label="Balance in Navigation Bar"
            value={balanceVisible}
            onValueChange={changeBalanceVisible} />
        </View>
      </View>
    );
  }
}

const connectedSettingsScreen = connect(
  selector,
  actions,
)(SettingsScreen);

export default connectedSettingsScreen;
