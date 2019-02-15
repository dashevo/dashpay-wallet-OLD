/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ["row"]: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#fff",
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: "flex-start",
    paddingBottom: 7.5,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 7.5
  },
  ["image"]: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 0
  },
  ["text"]: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "left"
  },
  state: {
    color: '#BABABA',
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
});
