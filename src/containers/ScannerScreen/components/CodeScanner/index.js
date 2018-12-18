/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { throttle } from 'lodash';

// Internal dependencies
import defaultProps from './defaults';
import styles from './styles';
import type { Props } from './types';

const EVENT_THROTTLE_MS = 1000;

class CodeScanner extends React.Component<Props> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    (this: any).handleBarCodeRead = this.handleBarCodeRead.bind(this);

    this.state = {
      onBarCodeRead: throttle(this.handleBarCodeRead, EVENT_THROTTLE_MS),
      barCodeTypes: [RNCamera.Constants.BarCodeType.qr]
    };
  }

  handleBarCodeRead(data: Object) {
    if (this.props.scanEnabled) {
      this.props.onCodeScanned(data);
    }
  }

  render(): React.Element<any> {
    return (
      <View style={styles.container}>
        {this.props.shouldRender && (
          <RNCamera style={styles.camera} {...this.state}>
            <View style={styles.row}>
              <View style={styles.col} />
            </View>
            <View style={styles.rowWithMask}>
              <View style={styles.col} />
              <View style={styles.mask} />
              <View style={styles.col} />
            </View>
            <View style={styles.row}>
              <View style={styles.col} />
            </View>
          </RNCamera>
        )}
      </View>
    );
  }
}

export default CodeScanner;
