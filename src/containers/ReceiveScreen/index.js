/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
// import { Image } from 'react-native';
// import { Avatar } from 'components/avatar';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import {Screen} from "../SplashScreen/components";
import connect from "react-redux/es/connect/connect";
import selector from "../SplashScreen/selectors";
import actions from "../SplashScreen/actions";

const logoFile = require('../../assets/images/dash-logo-letter-blue-small.png');

class ReceiveScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      unusedAddress: 'undefined',
      qrvalue: 'undefined'
    }

  }
  async componentDidMount() {
    const { payload } = await this.props.getUnusedAddress();
    const unusedAddress = payload.data.address;
    this.setState({unusedAddress});

  }

  render(): React.Element<any> {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.bold]}>{this.state.unusedAddress}</Text>
        <QRCode
          value="test"
          size={400}
          backgroundColor='transparent'
          logo={logoFile}
          logoSize={100}
          logoBackgroundColor='white'
          />
      </View>
    );
  }
};
ReceiveScreen = connect(
  selector,
  actions
)(ReceiveScreen);

export default ReceiveScreen;
