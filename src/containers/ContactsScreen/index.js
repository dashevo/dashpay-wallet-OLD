/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';
import { SectionList } from 'react-native';
import { Text } from 'react-native';
import { Animated } from 'react-native';
import { InteractionManager } from 'react-native';
import { Image } from 'components';

// Internal dependencies
import { View } from 'components';
import { SearchBox } from './components';
import actions from './actions';
import selector from './selectors';
import styles from './styles';
import type { Props } from './types';
import type { State } from './types';
import { Item } from './components';
import { ListEmpty } from './components';
import { ListFooter } from './components';
import { ListHeader } from './components';

class ContactsScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).renderItem = this.renderItem.bind(this);
    (this: any).renderListHeader = this.renderListHeader.bind(this);
    (this: any).renderListFooter = this.renderListFooter.bind(this);
    (this: any).renderListEmpty = this.renderListEmpty.bind(this);

    (this: any).handlePress = this.handlePress.bind(this);
    (this: any).handleSubmit = this.handleSubmit.bind(this);
    (this: any).handleMore = this.handleMore.bind(this);

    (this: any).searchBox = React.createRef();

    this.scrollPos = new Animated.Value(0);
    this.scrollSinkY = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.scrollPos } } }],
      { useNativeDriver: true }
    );
  }

  keyExtractor = (item, index) => item.address;

  renderItem({ item }: { item: Object }): React.Element<any> {
    return <Item {...item} onPress={this.handlePress} />;
  }

  renderListHeader(props): React.Element<any> {
    return <ListHeader {...props} />;
  }

  renderListFooter(): React.Element<any> {
    return <ListFooter {...this.props} />;
  }

  renderListEmpty(): React.Element<any> {
    return <ListEmpty {...this.props} />;
  }

  async handlePress(params: string) {
    this.props.navigation.navigate('PayTabs', params);

    await InteractionManager.runAfterInteractions();
    if (this.searchBox.current.resetForm) {
      this.searchBox.current.setFieldValue('query', '');
      this.searchBox.current.submitForm();
    }
  }

  handleSubmit(values: Object) {
    const { query } = values;
    this.props.searchBlockchainContacts(query);
  }

  handleMore(values: Object) {
    const { query } = values;
    this.props.searchBlockchainContacts(query);
  }

  render(): React.Element<any> {
    const animatedStyle = {
      transform: [
        {
          translateY: this.scrollPos.interpolate({
            inputRange: [0, 150],
            outputRange: [0, -150],
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp'
          })
        }
      ]
    };
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Animated.SectionList
            contentContainerStyle={styles.contentContainer}
            renderSectionHeader={this.renderListHeader}
            ListFooterComponent={this.renderListFooter}
            ListEmptyComponent={this.renderListEmpty}
            keyExtractor={this.keyExtractor}
            sections={this.props.contacts}
            renderItem={this.renderItem}
            onScroll={this.scrollSinkY}
          />
        </View>
        <Animated.View style={[styles.header, animatedStyle]}>
          <View style={[styles.row, styles.first]}>
            <Image
              style={styles.dash}
              source={require('assets/flags/dash.png')}
            />
          </View>
          <View style={[styles.row, styles.second]}>
            <SearchBox
              {...this.props}
              searchBox={this.searchBox}
              onSubmit={this.handleSubmit}
              onMore={this.handleMore}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}

ContactsScreen = connect(
  selector,
  actions
)(ContactsScreen);

export default ContactsScreen;
