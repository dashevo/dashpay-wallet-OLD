/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Reanimatable } from 'libraries';
import { TimingDriver } from 'libraries';
import animations from './animations';
import defaultProps from './props';
import styles from './styles';
import type { Props } from './types';

class ProgressBar extends React.PureComponent<Props> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);
    this.progressBar = React.createRef();
    this.driver = new TimingDriver();
  }

  async componentDidUpdate() {
    const { total } = this.props;
    const { value } = this.props;

    if (this.progressBar.current.progress) {
      await this.progressBar.current.progress();
    }

    if (value >= 100) {
      this.props.onComplete();
    }
  }

  renderProgressBar(): React.Element<any> {
    const { value } = this.props;
    return (
      <Reanimatable
        animations={animations}
        driver={this.driver}
        ref={this.progressBar}
        style={styles.progressBar}
        value={value}
      />
    );
  }

  render(): React.Element<any> {
    return (
      <View style={styles.progress}>
        {/* prettier-ignore */}
        {this.renderProgressBar()}
      </View>
    );
  }
}

export default ProgressBar;
