/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles';
import selectors from './selectors';
import actions from './actions';

class TabbedCard extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.onSettingsPressed = this.onSettingsPressed.bind(this);
    // this.animation = React.createRef();
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
        </View>
        <ScrollableTabView>
          <View style={styles.dummyPage} tabLabel='One'></View>
          <View style={styles.dummyPage} tabLabel='Two'></View>
          <View style={styles.dummyPage} tabLabel='Three'></View>
        </ScrollableTabView>
      </View>
    );
  }

  // onSettingsPressed() {
  //   return this.props.navigation.push('SettingsScreen');
  // }
}

let connectedTabbedCard = connect(
  selectors,
  actions
)(TabbedCard);

export default connectedTabbedCard;
