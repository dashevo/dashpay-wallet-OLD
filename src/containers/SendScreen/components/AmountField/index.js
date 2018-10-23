/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { CurrencyField } from "./components";
import { CurrencyImage } from "./components";
import { DashField } from "./components";
import { DashImage } from "./components";
import { Divider } from "./components";
import { Slide } from "./components";

const styles = {
  view: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "transparent",
    position: "relative",
    width: "100%",
    height: 128
  }
};

class AmountField extends React.Component<{}> {
  constructor(props: Props) {
    super(props);

    (this: any).setActive = this.setActive.bind(this);

    this.state = {
      active: "dash"
    };
  }

  setActive(fieldName) {
    this.setState({
      active: fieldName
    });
  }

  // This should be done with render props
  render(): React.Element<any> {
    const isDash = this.state.active === "dash";
    const isCurrency = this.state.active === "currency";
    return (
      <View style={styles.view}>
        <Divider />
        <Slide
          active={isDash}
          icon={<DashImage {...this.props} />}
          input={
            <DashField
              {...this.props}
              active={isDash}
              setActive={this.setActive}
            />
          }
        />
        <Slide
          active={isCurrency}
          icon={<CurrencyImage {...this.props} />}
          input={
            <CurrencyField
              {...this.props}
              active={isCurrency}
              setActive={this.setActive}
            />
          }
        />
      </View>
    );
  }
}

export default AmountField;
