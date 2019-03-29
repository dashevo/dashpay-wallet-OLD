/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from "react";
import { View } from "react-native";
import Text from "components/Text";
import Input from 'components/Input';
import Touchable from "components/Touchable";
import styles from "./styles";
import { connect } from 'react-redux';
import selector from './selectors';
import actions from './actions';
import { debounce } from 'lodash';

class DeveloperMenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onMnemonicChange = this.onMnemonicChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.setMnemonicDebounce = debounce(props.setMnemonic, 500);
    this.setUsernameDebounce = debounce(props.setUsername, 500);
    this.state = {
      username: props.username,
      mnemonic: props.mnemonic,
    };
  }

  static touchableAction(text, action) {
    return (
      <Touchable onPress={action}>
        <Text style={styles.text}>{text}</Text>
      </Touchable>
    );
  }

  onMnemonicChange(mnemonic) {
    this.setState({ mnemonic }, () => this.setMnemonicDebounce(mnemonic));
  }

  onUsernameChange(username) {
    this.setState({ username }, () => this.setUsernameDebounce(username));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mnemonic !== this.state.mnemonic) {
      this.setState({
        mnemonic: nextProps.mnemonic,
      });
    }
  }

  render(): React.Element<any> {
    const { navigate } = this.props.navigation;
    const { username, mnemonic } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mnemonic:</Text>
        <Input
          style={styles.input}
          multiline={true}
          onChangeText={this.onMnemonicChange}
          value={mnemonic}
        />
        <Text style={styles.text}>Username:</Text>
        <Input
          style={styles.input}
          onChangeText={this.onUsernameChange}
          value={username}
        />
        {DeveloperMenuScreen.touchableAction('Generate new mnemonic', () => this.props.createAccount())}
        {DeveloperMenuScreen.touchableAction('Go to HomeScreen', () => navigate('HomeScreen'))}
      </View>
    );
  }
}

export default connect(
  selector,
  actions
)(DeveloperMenuScreen);;
