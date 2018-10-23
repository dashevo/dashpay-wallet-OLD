/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from "react";
import { TouchableHighlight } from "react-native";
import { Text } from "react-native";
import styles from "./styles";

class Button extends React.Component<{}> {
  render(): React.Element<any> {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={"#000"}
        style={styles.button}
        {...this.props}
      >
        <Text style={styles.text}>{"Pay"}</Text>
      </TouchableHighlight>
    );
  }
}

export default Button;
