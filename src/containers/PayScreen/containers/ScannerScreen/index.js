// @flow
import React from 'react';
import {
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import createStyles from './styles';
import { parseDashAddress } from './utils';
import type { Props } from './types';

const windowDimensions = Dimensions.get('window');
const styles = createStyles(windowDimensions);

class ScannerScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.navigationOptions = {
      header: null,
    };
    this.barcodeRecognized = this.barcodeRecognized.bind(this);
    this.handlePressCancel = this.handlePressCancel.bind(this);
  }

  barcodeRecognized({ data }) {
    const { address, amount } = parseDashAddress(data);
    if (address) {
      const { navigation } = this.props;
      navigation.replace('ContactScreen', { recipient: address, amount });
    }
  }

  handlePressCancel() {
    const { navigation } = this.props;
    navigation.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          captureAudio={false}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          onBarCodeRead={this.barcodeRecognized}
          style={StyleSheet.absoluteFill}
        />

        <View style={styles.topOverlay} />
        <View style={styles.leftOverlay} />
        <View style={styles.rightOverlay} />
        <View style={styles.bottomOverlay} />
        <View style={styles.topLeftCorner} />
        <View style={styles.topRightCorner} />
        <View style={styles.bottomLeftCorner} />
        <View style={styles.bottomRightCorner} />

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.handlePressCancel}
            hitSlop={{
              top: 40, bottom: 40, right: 40, left: 40,
            }}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

export default ScannerScreen;
