/**
 * Copyright (c) 2014-present, Currency Core Group, Inc.
 *
 * @flow
 */
import * as React from "react";
import { View } from "react-native";
import { Image } from "react-native";
import styles from "./styles";

// This should be done with props
function CurrencyImage(props) {
  return (
    <View style={styles.view}>
      <Image
        resizeMode={"cover"}
        source={require("/assets/images/usa.png")}
        style={styles.image}
      />
    </View>
  );
}

export default CurrencyImage;
