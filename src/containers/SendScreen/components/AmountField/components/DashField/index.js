/**
 * Copyright (c) 2014-present, Currency Core Group, Inc.
 *
 * @flow
 */
import * as React from "react";
import { TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";
import { injectIntl } from "react-intl";
import { Icon } from "components";
import Slide from "../Slide";
import defaultProps from "./props";
import styles from "./styles";

// This should be simplified.
class DashField extends React.PureComponent<{}> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    (this: any).handleOnChangeText = this.handleOnChangeText.bind(this);
    (this: any).handleOnPress = this.handleOnPress.bind(this);

    this.input = React.createRef();
    this.state = {
      value: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    let value = props.active
      ? props.values.dash
      : props.values.currency / props.rate;
    value = Number.isNaN(value) ? "" : value.toString();
    if (state.value !== value) {
      props.setFieldValue("dash", value);
      return { value };
    }
    return null;
  }

  handleOnChangeText(value: string) {
    const dash = parseFloat(value);
    this.props.setFieldValue("dash", dash);
  }

  handleOnPress(event) {
    if (!this.props.active) {
      this.props.setActive("dash");
      if (this.input.current) {
        this.input.current.focus();
      }
    }
  }

  render(): React.Element<any> {
    return (
      <TouchableWithoutFeedback onPress={this.handleOnPress}>
        <View style={styles.row}>
          <TextInput
            ref={this.input}
            placeholder={"0.00"}
            keyboardType={"numeric"}
            onChangeText={this.handleOnChangeText}
            underlineColorAndroid={"transparent"}
            placeholderTextColor={"#999"}
            selectionColor={"blue"}
            maxLength={12}
            editable={this.props.active}
            value={this.state.value}
            style={styles.input}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default DashField;
