/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'components';
import { View } from 'components';
import QRCode from 'react-native-qrcode-svg';
// import { Image } from 'react-native';
// import { Avatar } from 'components/avatar';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import {connect} from "react-redux";
// import { CopyAddressButton } from 'components';
import selector from "./selectors";
import actions from "./actions";

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
    await this.props.getUnusedAddress();
    const {unusedAddress} = this.props;
    this.setState({unusedAddress});
  }

  render(): React.Element<any> {
    return (
      <SafeAreaView style={styles.container}>

        <Text selectable={true} style={[styles.text, styles.bold]}>{this.state.unusedAddress}</Text>
        <QRCode
          value={this.state.unusedAddress}
          size={400}
          backgroundColor='transparent'
          logo={logoFile}
          logoSize={100}
          logoBackgroundColor='white'
          />
        {/*<CopyAddressButton address={this.state.unusedAddress} />*/}
      </SafeAreaView>
    );
  }
};
ReceiveScreen = connect(
  selector,
  actions
)(ReceiveScreen);

export default ReceiveScreen;
