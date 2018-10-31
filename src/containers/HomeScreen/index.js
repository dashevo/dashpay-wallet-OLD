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

class HomeScreen extends React.Component<Props> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);
    this.reanimatableRefs = [];
    this.reanimatableRefs.push(React.createRef());
    this.reanimatableRefs.push(React.createRef());
    this.reanimatableRefs.push(React.createRef());
    this.handleOnComplete = this.handleOnComplete.bind(this);
  }

  async componentDidMount() {
    const refs = this.reanimatableRefs;
    function animationController(ref, index) {
      if (index == 0) return ref.fadeInUpBig();
      if (index == 1) return ref.bounceIn();
      if (index == 2) return ref.fadeIn();
    }
    await sequence(refs, animationController);
    this.props.getDeviceLocale();
  }

  async handleOnComplete() {
    const refs = this.reanimatableRefs;
    await sequence(refs, ref => ref.fadeInUpBig());
  }

  navigateFurther() {
    const { routeName } = this.props;
    this.props.navigation.push(routeName);
  }

  render(): ReactElement {
    return (
      <Screen
        reanimatableRefs={this.reanimatableRefs}
        onComplete={this.handleOnComplete}
        navigation={this.props.navigation}
        walletLib={this.props.walletLib}
      />
    );
  }
}

HomeScreen = connect(
  selector,
  actions
)(HomeScreen);

export default HomeScreen;
