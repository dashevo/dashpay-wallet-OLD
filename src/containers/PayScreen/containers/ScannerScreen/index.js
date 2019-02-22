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

    (this: any).handleScreenFocused = this.handleScreenFocused.bind(this);
    (this: any).handleCodeScanned = this.handleCodeScanned.bind(this);

    this.state = {
      onCodeScanned: this.handleCodeScanned,
      shouldRender: true,
      scanEnabled: true
    };
  }

  componentDidMount() {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      this.handleScreenFocused
    );
  }

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  handleScreenFocused(event: Object) {
    this.setState({
      shouldRender: true,
      scanEnabled: true
    });
  }

  handleCodeScanned(data: Object) {
    this.setState(
      {
        scanEnabled: false
      },
      () => {
        this.props.navigation.replace('PayTabs', {
          recipient: data.data.replace('dash:', '')
        });
      }
    );
  }

  render(): React.Element<any> {
    return <CodeScanner {...this.state} />;
  }
}

export default ScannerScreen;
