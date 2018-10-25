/**
 * Copyright (c) 2014-present, Currency Core Group, Inc.
 *
 * @flow
 */
import * as React from "react";
import { View } from "react-native";
import { Image } from "react-native";
import styles from "./styles";

function DashImage(props) {
  return (
    <View style={styles.view}>
      <Image
        resizeMode={"cover"}
        source={require("/assets/images/dash_blue.png")}
        style={styles.image}
      />
    </View>
  );
}

export default DashImage;
