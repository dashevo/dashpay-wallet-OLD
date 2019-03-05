/* @flow */

import React from 'react';
import {
  Dimensions,
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { throttle } from 'lodash';

import { RNCamera } from 'react-native-camera';
import { getStatusBarHeight } from 'utilities';

let { width, height } = Dimensions.get('window');

height = height - getStatusBarHeight();

export default class BarCodeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    scannerIsVisible: false
  };

  _isMounted: boolean;

  componentWillMount() {
    setTimeout(() => {
      this.setState({ scannerIsVisible: true });
    }, 800);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _handleBarCodeRead = throttle(({ data }) => {
    this.setState({ scannerIsVisible: false }, () => {
      if (this._isMounted) {
        const recipient = data.replace('dash:', '');
        this.props.navigation.replace('PayTabs', { recipient });
      }
    });
  }, 1000);

  _handlePressCancel = () => {
    this.props.navigation.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.scannerIsVisible ? (
          <RNCamera
            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        ) : null}

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
            onPress={this._handlePressCancel}
            hitSlop={{ top: 40, bottom: 40, right: 40, left: 40 }}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const BOX_MARGIN = 30;
const BOX_SIZE = width - BOX_MARGIN * 2;
const BOX_TOP = height / 2 - BOX_SIZE / 2;
const BOX_BOTTOM = BOX_TOP + BOX_SIZE;
const BOX_LEFT = BOX_MARGIN;
const BOX_RIGHT = width - BOX_MARGIN;

const overlayBaseStyle = {
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.6)'
};

const cornerBaseStyle = {
  position: 'absolute',
  borderColor: '#fff',
  backgroundColor: 'transparent',
  borderWidth: 2,
  width: 10,
  height: 10
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  topLeftCorner: {
    ...cornerBaseStyle,
    top: BOX_TOP - 1,
    left: BOX_MARGIN - 1,
    borderBottomWidth: 0,
    borderRightWidth: 0
  },
  topRightCorner: {
    ...cornerBaseStyle,
    top: BOX_TOP - 1,
    right: BOX_MARGIN - 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0
  },
  bottomLeftCorner: {
    ...cornerBaseStyle,
    bottom: height - BOX_BOTTOM - 1,
    left: BOX_MARGIN - 1,
    borderTopWidth: 0,
    borderRightWidth: 0
  },
  bottomRightCorner: {
    ...cornerBaseStyle,
    bottom: height - BOX_BOTTOM - 1,
    right: BOX_MARGIN - 1,
    borderTopWidth: 0,
    borderLeftWidth: 0
  },
  topOverlay: {
    ...overlayBaseStyle,
    top: 0,
    left: 0,
    right: 0,
    bottom: height - BOX_TOP
  },
  leftOverlay: {
    ...overlayBaseStyle,
    top: BOX_TOP,
    left: 0,
    right: BOX_RIGHT,
    bottom: height - BOX_BOTTOM
  },
  rightOverlay: {
    ...overlayBaseStyle,
    top: BOX_TOP,
    left: BOX_RIGHT,
    right: 0,
    bottom: height - BOX_BOTTOM
  },
  bottomOverlay: {
    ...overlayBaseStyle,
    top: BOX_BOTTOM,
    left: 0,
    right: 0,
    bottom: 0
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'flex-start',
    left: 25
  },
  headerText: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: '400'
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  cancelText: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center'
  }
});
