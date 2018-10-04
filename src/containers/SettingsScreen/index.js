/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
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
import QRCode from "react-native-qrcode-svg";
import connect from "react-redux/es/connect/connect";
import selector from "./selectors";
import actions from "./actions";

import currencies from 'constants';
import translations from 'translations';
import { RadioRow, LabeledSwitch } from 'components';

class SettingsScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.settings={
      currency: 'USD',
      locale: 'en',
      balanceVisible:true,
    }
    this.state = {
      locale:{
        options:Object.keys(translations).map(
          translation => ({
            key: translation,
            value: translations[translation].languageName
          })
        )
      },
      currency:{
        options:currencies
      },
    }
  }
  async componentDidMount() {
    this.changeLocale = this.props.changeLocale.bind(this);
    this.changeCurrency = this.props.changeCurrency.bind(this);
    this.changeBalanceVisible = this.props.changeBalanceVisible.bind(this);
  }

  render(): React.Element<any> {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Settings</Text>
        <View style={styles.content}>
          <Text style={styles.text}>Language</Text>
          {/* <RadioRow options={localeOptions} currentOption={settings.locale} action={changeLocale} />
          <Text style={styles.text}>Currency</Text>
          <RadioRow options={currencyOptions} currentOption={settings.currency} action={changeCurrency} />
          <LabeledSwitch label="Balance in Navigation Bar" value={settings.balanceVisible} onValueChange={changeBalanceVisible} /> */}
          <Text style={styles.text}>App State</Text>
          <Text style={styles.debugger}>{JSON.stringify(state, null, '  ')}</Text>
        </View>
      </View>
    );
  }
};
SettingsScreen = connect(
  selector,
  actions
)(SettingsScreen);

export default SettingsScreen;
