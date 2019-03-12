/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';

// Internal dependencies
import View from 'components/View';
import Text from 'components/Text';
import NavStatic from 'components/NavStatic';
import ProgressBar from 'components/ProgressBar';
import { Logo } from 'components';
import SpringProvider from './components/SpringProvider';
import ParallaxScrollView from './components/ParallaxScrollView';
import ProfilePic from './components/ProfilePic';
import IconBar from './components/IconBar';
import SlideUp from './components/SlideUp';
import FadeIn from './components/FadeIn';
import selector from './selectors';
import actions from './actions';
import styles from './styles';
import Activities from './components/Activities';
import { TouchableOpacity } from 'react-native';

const { height: viewportHeight, width: viewportWidth } = Dimensions.get(
  'window'
);

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleProgress = this.handleProgress.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);

    this.state = {
      progress: 0,
      complete: false
    };
  }

  handleProgress(value) {
    this.setState({
      progress: value
    });
  }

  handleComplete() {
    this.setState({
      complete: true
    });
    this.props.navigation.navigate('ContactsScreen');
  }

  async handleAnimationEnd(event) {
    if (this.state.progress === 0 && event.finished) {
      await this.props.initializeWallet();

      this.setState({
        progress: 100
      });

      return true;
    }
  }

  renderNavBar(): React.Element<any> {
    const props = {
      inputRange: [0, 1.75, 2],
      outputRange: [0, 0, 1]
    };
    return (
      <FadeIn style={styles.navBar} {...props}>
        <NavStatic {...this.props} />
      </FadeIn>
    );
  }

  renderLogo(): React.Element<any> {
    const props = {
      inputRange: [0, 0.5],
      outputRange: [0, 1]
    };
    return (
      <FadeIn {...props}>
        <Logo style={styles.logo} />
      </FadeIn>
    );
  }

  renderProgressBar(): React.Element<any> {
    const props = {
      inputRange: [0.5, 1, 1.5],
      outputRange: [0, 1, 0]
    };
    return (
      <FadeIn {...props}>
        <ProgressBar
          onComplete={this.handleComplete}
          value={this.state.progress}
        />
      </FadeIn>
    );
  }

  renderProfilePic(): React.Element<any> {
    const { user } = this.props;
    const props = {
      inputRange: [0, 1.5, 1.75],
      outputRange: [0, 0, 1]
    };
    return (
      <FadeIn {...props}>
        <ProfilePic {...user} />
      </FadeIn>
    );
  }

  renderIconBar(): React.Element<any> {
    const props = {
      inputRange: [0, 1.75, 2],
      outputRange: [0, 0, 1]
    };
    return (
      <FadeIn {...props}>
        <IconBar {...this.props} />
      </FadeIn>
    );
  }

  renderHeader(): React.Element<any> {
    const tmp = viewportHeight / 2 - 128;
    const props = {
      inputRange: [0, 1.5, 1.75],
      outputRange: [tmp, tmp, 0]
    };
    return (
      <SlideUp style={styles.slideUp} {...props}>
        {this.renderLogo()}
        {this.renderProgressBar()}
        {this.renderProfilePic()}
        {this.renderIconBar()}
        {this.renderNavBar()}
      </SlideUp>
    );
  }

  renderBody(): React.Element<any> {
    const props = {
      inputRange: [0, 1.75, 2],
      outputRange: [0, 0, 1]
    };
    return (
      <FadeIn {...props}>
        <Activities {...this.props} />
      </FadeIn>
    );
  }

  render(): React.Element<any> {
    return (
      <View style={styles.container}>
        <SpringProvider
          toValue={this.state.complete ? 2 : 1}
          onAnimationEnd={this.handleAnimationEnd}>
          <ParallaxScrollView
            renderHeader={this.renderHeader}
            renderBody={this.renderBody}
          />
        </SpringProvider>
      </View>
    );
  }
}

HomeScreen = connect(
  selector,
  actions
)(HomeScreen);

export default HomeScreen;
