/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from "react";
import { View } from "react-native";
import { Spring } from "react-spring/dist/native.cjs";
import { animated } from "react-spring/dist/native.cjs";

const SpringView = animated(View);
const styles = {
  springView: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "transparent",
    flexDirection: "row",
    height: 64,
    justifyContent: "flex-start",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  }
};

function Slide(props) {
  const springProps = props.active
    ? { from: { x: 64 }, to: { x: 0 } }
    : { from: { x: 0 }, to: { x: 64 } };
  return (
    <Spring native {...springProps}>
      {({ x }) => (
        <SpringView
          style={{
            ...styles.springView,
            transform: [{ translateY: x }]
          }}
        >
          <SpringView
            style={{
              transform: [
                {
                  scale: x.interpolate({
                    range: [0, 64],
                    output: [1, 0.75],
                    extrapolate: "clamp"
                  })
                }
              ]
            }}
          >
            {props.icon}
          </SpringView>
          <SpringView
            style={{
              flex: 1,
              transform: [
                {
                  scale: x.interpolate({
                    range: [0, 64],
                    output: [1, 0.75],
                    extrapolate: "clamp"
                  })
                }
              ]
            }}
          >
            {props.input}
          </SpringView>
          <SpringView
            style={{
              opacity: 0,
              transform: [
                {
                  scale: x.interpolate({
                    range: [0, 64],
                    output: [1, 0.75],
                    extrapolate: "clamp"
                  })
                }
              ]
            }}
          >
            {props.icon}
          </SpringView>
        </SpringView>
      )}
    </Spring>
  );
}

export default Slide;
