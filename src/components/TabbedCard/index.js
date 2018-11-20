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
import { Avatar } from 'components';
import { CustomTabBar } from './components';
import styles from './styles';
import selectors from './selectors';
import actions from './actions';

class TabbedCard extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      fakeText: Array.from({length: 1000},
        () => Math.random().toString(36).substring(2+Math.floor(Math.random()*6)) + (Math.random()>0.2?' ':'. ')
      )
    };
    // this.onSettingsPressed = this.onSettingsPressed.bind(this);
    // this.animation = React.createRef();
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Avatar source={require('assets/images/avatar-default.png')} />
          <Text style={styles.cardTitle}>Contact Name</Text>
        </View>
        <ScrollableTabView
          renderTabBar={() => <CustomTabBar />}
          initialPage={0}
        >
          <ScrollView style={styles.dummyPage} tabLabel='One (tall)'>
            <Text style={{padding:10}}>{this.state.fakeText}</Text>
          </ScrollView>
          <ScrollView style={styles.dummyPage} tabLabel='TwoTwoTwoTwo'>
            <Text style={{padding:10}}>{this.state.fakeText}</Text>
          </ScrollView>
          <ScrollView style={styles.dummyPage} tabLabel='Three'>
            <Text style={{padding:10}}>{this.state.fakeText}</Text>
          </ScrollView>
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
