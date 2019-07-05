// @flow

import * as React from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
// import { Image } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';

import { Text, View } from 'components';
// import { CopyAddressButton } from 'components';
// import { Avatar } from 'components/avatar';

import styles from './styles';
import type { Props, State } from './types';
import selector from './selectors';
import actions from './actions';

const logoFile = require('../../assets/images/dash_white_s.png');

const { width: viewportWidth } = Dimensions.get(
  'window',
);
const qrWidth = viewportWidth - 20;

class ReceiveScreen extends React.Component<Props, State> {
  componentDidMount() {
    const { getUnusedAddress } = this.props;
    getUnusedAddress();
  }

  render(): React.Element<any> {
    const { unusedAddress } = this.props;
    return (
      <SafeAreaView style={styles.container}>

        <Text selectable style={[styles.text, styles.bold]}>{unusedAddress}</Text>
        <View style={styles.qrWrapper}>
          <QRCode
            value={`dash:${unusedAddress}`}
            size={qrWidth}
            backgroundColor="transparent"
            color="black"
            logo={logoFile}
            logoSize={qrWidth * 7 / 29}
            logoMargin={qrWidth / 29}
            logoBackgroundColor="#078be2"
          />
        </View>
        {/* <CopyAddressButton address={unusedAddress} /> */}
      </SafeAreaView>
    );
  }
}
export default connect(
  selector,
  actions,
)(ReceiveScreen);
