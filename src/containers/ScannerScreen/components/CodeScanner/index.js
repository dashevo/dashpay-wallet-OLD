/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { RNCamera } from 'react-native-camera';
import { throttle } from 'lodash';

// Internal dependencies
import defaultProps from './defaults';
import styles from './styles';
import type { Props } from './types';

const EVENT_THROTTLE_MS = 1000;

class CodeScanner extends React.Component<Props> {
  static defaultProps = {};

  constructor(props: Props) {
    super(props);

    (this: any).handleBarCodeRead = throttle(
      this.handleBarCodeRead.bind(this),
      EVENT_THROTTLE_MS
    );

    this.state = {
      onBarCodeRead: this.handleBarCodeRead,
      barCodeTypes: [RNCamera.Constants.BarCodeType.qr]
    };
  }

  handleBarCodeRead(data: Object) {
    if (this.props.scanEnabled) {
      this.props.onCodeScanned(data);
    }
  }

  render(): React.Element<any> {
    return this.props.shouldRender ? (
      <RNCamera style={styles.camera} {...this.state} />
    ) : null;
  }
}

export default CodeScanner;
