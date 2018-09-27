/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import {TextInput, View} from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
// import { Image } from 'react-native';
// import { Avatar } from 'components/avatar';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import { Navigation } from 'react-native-navigation';
import connect from "react-redux/es/connect/connect";
import selector from "./selectors";
import actions from "./actions";

class SendScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      recipient: 'yWdXnYxGbouNoo8yMvcbZmZ3Gdp6BpySxL',
      amount:'1'
    };
    this.onChangeRecipient = this.onChangeRecipient.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onPayPressed = this.onPayPressed.bind(this);

  }

  async componentDidMount() {
  }
  onChangeRecipient(recipient){
    this.setState({recipient});
  }
  onChangeAmount(amount){
    this.setState({amount});
  }
  async onPayPressed(){
    let payType = (this.props.walletLib.isAddress(this.state.recipient)) ? 'address' : 'username';
    let result = await this.props.walletLib.payTo(payType, this.state.recipient, this.state.amount);
    console.log(result);
  }
  render(): React.Element<any> {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Recipient :</Text>
        <TextInput
          style={styles.recipientField}
          onChangeText={this.onChangeRecipient}
          value={this.state.recipient}
          placeholder={"Enter a dash address or a username"}
        />
        <Text style={styles.text}>Amount :</Text>
        <TextInput
          style={styles.amountField}
          onChangeText={this.onChangeAmount}
          keyboardType="numeric"
          value={this.state.amount}
        />
        <TouchableOpacity onPress={this.onPayPressed}>
          <Text style={styles.text}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.pop}>
          <Text style={styles.text}>Bo Back</Text>
        </TouchableOpacity>
      </View>
      )
  };
};


SendScreen = connect(
  selector,
  actions
)(SendScreen);

export default SendScreen;
