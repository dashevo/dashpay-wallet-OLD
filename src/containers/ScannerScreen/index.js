/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
// External dependencies
import * as React from 'react';

// Internal dependencies
import { CodeScanner } from './components';
import defaultProps from './defaults';
import type { Props } from './types';

class ScannerScreen extends React.Component<Props> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    (this: any).handleCodeScanned = this.handleCodeScanned.bind(this);

    this.state = {
      shouldRender: true,
      scanEnabled: true
    };
  }

  handleCodeScanned(data: Object) {
    console.log('QR Code:', data);
    this.setState({
      scanEnabled: false
    });
  }

  render(): React.Element<any> {
    return (
      <CodeScanner onCodeScanned={this.handleCodeScanned} {...this.state} />
    );
  }
}

export default ScannerScreen;
