/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { StyleSheet } from "react-native";
import { THEMES } from "constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  header: {
    height: 70,
    width: "100%"
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    padding: 32
  },
  text: {
    justifyContent: "center"
  },
  section: {
    alignSelf: "stretch",
    paddingTop: 32,
    paddingBottom: 32
  },
  amountField: {
    backgroundColor: THEMES.vivid.foreground,
    width: 60
  }
});

export default styles;
