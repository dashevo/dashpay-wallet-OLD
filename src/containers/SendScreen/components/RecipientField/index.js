/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from "react";

import { View } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import styles from "./styles";

class RecipientField extends React.Component<{}> {
  constructor(props: Props) {
    super(props);
    (this: any).handleOnChangeText = this.handleOnChangeText.bind(this);
  }

  handleOnChangeText(value) {
    this.props.setFieldValue("recipient", value);
  }

  render(): React.Element<any> {
    return (
      <View style={styles.row}>
        <TextInput
          ref={this.input}
          placeholder={"Recipient"}
          keyboardType={"numeric"}
          onChangeText={this.handleOnChangeText}
          underlineColorAndroid={"transparent"}
          placeholderTextColor={"#999"}
          selectionColor={"blue"}
          value={this.props.values.recipient}
          style={styles.input}
        />
      </View>
    );
  }
}

export default RecipientField;
