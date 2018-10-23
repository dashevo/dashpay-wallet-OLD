/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import {TextInput, View} from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavBar } from 'components';
// import { Image } from 'react-native';
// import { Avatar } from 'components/avatar';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import { RecipientInput } from 'components';
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
    // console.log(result);
  }
  render(): React.Element<any> {
    const { recipient } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <NavBar navigation={this.props.navigation} isOpen={true} />
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>Recipient : {recipient}</Text>
          <RecipientInput value={recipient} onChangeRecipient={this.onChangeRecipient} />
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
            <Text style={styles.text}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


SendScreen = connect(
  selector,
  actions
)(SendScreen);

export default SendScreen;
