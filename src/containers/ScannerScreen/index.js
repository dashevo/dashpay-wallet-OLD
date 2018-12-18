/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Internal dependencies
import { CodeScanner } from './components';
import actions from './actions';
import defaultProps from './defaults';
import selector from './selectors';
import type { Props } from './types';

class ScannerScreen extends React.Component<Props> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    (this: any).handleScreenFocused = this.handleScreenFocused.bind(this);
    (this: any).handleCodeScanned = this.handleCodeScanned.bind(this);

    this.state = {
      onCodeScanned: this.handleCodeScanned,
      shouldRender: false,
      scanEnabled: false
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
        this.props.transactionRecipientScanned(data);
        this.props.navigation.goBack();
      }
    );
  }

  render(): React.Element<any> {
    return <CodeScanner {...this.state} />;
  }
}

ScannerScreen = connect(
  selector,
  actions
)(ScannerScreen);

export default ScannerScreen;
