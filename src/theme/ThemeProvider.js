/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { ThemeContextProvider } from './context';

type Props = {};
type State = {};

class ThemeProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    (this: any).setTheme = this.setTheme.bind(this);

    this.state = {
      setTheme: this.setTheme,
      theme: props.theme
    };
  }

  setTheme(theme) {
    this.setState({ theme });
  }

  render() {
    return (
      <ThemeContextProvider value={this.state}>
        {React.Children.only(this.props.children)}
      </ThemeContextProvider>
    );
  }
}

export default ThemeProvider;
