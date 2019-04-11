/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { connect } from "react-redux";
import {
  View,
  Text,
  Input,
  TouchableOpacity,
} from 'components';

import styles from './styles';

import type {
  ReactElement,
  Props,
  State
} from './types';
import selectors from "./selectors";
import actions from "./actions";

class RegistrationScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameEdit = this.handleUsernameEdit.bind(this);
    this.state = {
      username: '',
      profile: {
        displayName: '',
        bio: '',
      }
    };
  }

  handleUsernameEdit(username) {
    this.setState({
      username: username.toLowerCase().replace(/[^a-z_0-9]/g, '').substring(0, 23),
    });
  }

  handleSubmit() {
    const { register } = this.props;
    const { username } = this.state;
    if (username.length < 4) {
      alert('Too short!');
    } else {
      register(username);
    }
  }

  render(): ReactElement {
    const { username } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Registration</Text>
        <Input
          style={styles.input}
          onChangeText={this.handleUsernameEdit}
          value={username} />
        <TouchableOpacity
          onPress={this.handleSubmit}>
          <Text>Submit</Text>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
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
