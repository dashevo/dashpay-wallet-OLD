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
  Animated,
} from 'react-native';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Avatar } from 'components';
import { CustomTabBar, DisappearingHeaderPart } from './components';
import styles from './styles';
import selectors from './selectors';
import actions from './actions';

class TabbedCard extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      scrollOffsets: this.props.children.map(child=>new Animated.Value(0)),
    };
  }

  scrollListener(index) {
    return (event)=> {
      this.state.scrollOffsets[index].setValue(event.nativeEvent.contentOffset.y);
    }
  }

  render() {
    return (
      <View style={styles.card}>
        <ScrollableTabView
          renderTabBar={
            () => <CustomTabBar
              scrollOffsets={this.state.scrollOffsets}
              header={
                <View style={styles.header}>
                  <DisappearingHeaderPart
                    scrolledDistance={this.state.scrollOffsets[0]}
                    initialHeight={this.props.disappearingHeaderHeight || 0}
                  >
                    <Avatar source={require('assets/images/avatar-default.png')} />
                  </DisappearingHeaderPart>
                  <Text style={styles.cardTitle}>Contact Name</Text>
                </View>
              }
            />
          }
          initialPage={0}
          tabBarPosition='overlayTop'
        >
          {
            this.props.children.map((child, index) =>
              <ScrollView
                tabLabel={child.props.tabLabel || 'Tab ' + index}
                key={index}
                onScroll={this.scrollListener(index)}
                showsVerticalScrollIndicator={false}
                style={{paddingTop: this.props.disappearingHeaderHeight + 100}}
              >
                { child }
              </ScrollView>
            )
          }
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
