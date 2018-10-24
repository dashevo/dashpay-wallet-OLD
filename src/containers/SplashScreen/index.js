/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from "react";
import { connect } from "react-redux";
import { sequence } from "libraries";
import { Screen } from "./components";
import actions from "./actions";
import defaultProps from "./props";
import selector from "./selectors";
import type { ReactElement } from "./types";
import type { Props } from "./types";

class SplashScreen extends React.Component<Props> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);
    this.reanimatableRefs = [];
    this.reanimatableRefs.push(React.createRef());
    this.reanimatableRefs.push(React.createRef());
    this.handleOnComplete = this.handleOnComplete.bind(this);
  }

  async componentDidMount() {
    const refs = this.reanimatableRefs;
    await sequence(refs, ref => ref.fadeIn());
    return Promise.all([
      this.props.initializeWallet(),
      this.props.initializeRateService()
    ]).then(this.navigateFurther.bind(this));
  }

  async handleOnComplete() {
    const refs = this.reanimatableRefs;
    await sequence(refs, ref => ref.fadeOut());
  }

  navigateFurther() {
    const { routeName } = this.props;
    const { routeParams } = this.props;
    this.props.navigation.resetTo("HomeScreen", routeParams);
  }

  render(): ReactElement {
    return (
      <Screen
        reanimatableRefs={this.reanimatableRefs}
        onComplete={this.handleOnComplete}
        elementId={this.props.elementId}
      />
    );
  }
}

SplashScreen = connect(
  selector,
  actions
)(SplashScreen);

export default SplashScreen;
