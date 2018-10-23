/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from "react";
import { TextInput, View } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { AmountField } from "./components";
import { RecipientField } from "./components";
import { Button } from "./components";
import { withFormik } from "formik";
import * as Yup from "yup";
import styles from "./styles";
import { Balance } from "containers";
import type { ReactElement } from "./types";
import type { Props } from "./types";
import type { State } from "./types";
import { Navigation } from "react-native-navigation";
import connect from "react-redux/es/connect/connect";
import selector from "./selectors";
import actions from "./actions";

class SendScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.state = {
      visible: false
    };
  }

  handleOnPress(event) {
    this.setState({
      visible: !this.state.visible
    });
  }

  render(): React.Element<any> {
    const { visible } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Balance />
        </View>
        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.section}>
            <RecipientField {...this.props} />
          </View>
          <View style={styles.section}>
            <AmountField {...this.props} />
          </View>
          <View style={styles.section}>
            <Text>
              {visible &&
                JSON.stringify({
                  recipient: this.props.values.recipient,
                  amount: this.props.values.dash
                })}
            </Text>
          </View>
          <View style={styles.section}>
            <Button {...this.props} onPress={this.handleOnPress} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

SendScreen = SendScreen = connect(
  selector,
  actions
)(SendScreen);

SendScreen = withFormik({
  mapPropsToValues: () => ({
    dash: "",
    currency: ""
  }),
  validationSchema: Yup.object().shape({
    dash: Yup.number().required("Required"),
    currency: Yup.number().required("Required")
  }),
  handleSubmit: values => {},
  displayName: "Validation"
})(SendScreen);

export default SendScreen;
