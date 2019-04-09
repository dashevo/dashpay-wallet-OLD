/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import { connect } from "react-redux";
import selectors from "./selectors";
import actions from "./actions";

import { View } from 'components';
import { Text } from 'components';
import { Input } from 'components';
import { TouchableOpacity } from 'components';

class RegistrationScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameEdit = this.handleUsernameEdit.bind(this);
    this.state = {
      username: '',
    };
  }

  handleUsernameEdit(username) {
    this.setState({
      username: username.toLowerCase().replace(/[^a-z_0-9]/g, '').substring(0, 23),
    });
  }

  handleSubmit() {
    if (this.state.username.length < 4) {
      alert('Too short!');
      return;
    }
    this.props.register(this.state.username);
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Registration</Text>
        <Input
          style={styles.input}
          onChangeText={this.handleUsernameEdit}
          value={this.state.username} />
        <TouchableOpacity
          onPress={this.handleSubmit}>
          <Text>Submit</Text>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default connect(
  selectors,
  actions
)(RegistrationScreen);
