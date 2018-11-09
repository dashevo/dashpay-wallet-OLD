/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import { renderProps } from 'utilities';
import { defaultProps } from './defaults';
import { initialState } from './defaults';
import type { Props } from './types';
import type { State } from './types';

class Touchable extends React.Component<Props, State> {
  static defaultProps = defaultProps;
  static initialState = initialState;

  constructor(props: Props) {
    super(props);
    this.state = this.constructor.initialState;
    (this: any).handleOnPressIn = this.handleOnPressIn.bind(this);
    (this: any).handleOnPressOut = this.handleOnPressOut.bind(this);
  }

  handleOnPressIn(event: Event) {
    this.setState({ pressed: true });
  }

  handleOnPressOut(event: Event) {
    this.setState({ pressed: false });
  }

  render(): React.Element<any> {
    return (
      <TouchableHighlight
        {...this.props}
        onPressIn={this.handleOnPressIn}
        onPressOut={this.handleOnPressOut}>
        {renderProps(this.props, this.state)}
      </TouchableHighlight>
    );
  }
}

export default Touchable;
