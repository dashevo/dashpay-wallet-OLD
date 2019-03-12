/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
// External dependencies
import * as React from 'react';
import { SectionList } from 'react-native';
import { connect } from 'react-redux';

// Internal dependencies
import View from 'components/View';
import Text from 'components/Text';
import selectors from './selectors';
import styles from './styles';

type Props = {};
type State = {};

class TransactionsTab extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    (this: any).handleViewableItemsChanged = this.handleViewableItemsChanged.bind(
      this
    );
    (this: any).renderSectionHeader = this.renderSectionHeader.bind(this);
    (this: any).keyExtractor = this.keyExtractor.bind(this);
    (this: any).renderItem = this.renderItem.bind(this);

    this.state = {};
  }

  keyExtractor(item, index) {
    return item + index;
  }

  handleViewableItemsChanged(info) {}

  renderSectionHeader(info) {
    return (
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{info.section.title}</Text>
      </View>
    );
  }

  renderItem(props) {
    return <Text>{props.item.name}</Text>;
  }

  ListHeaderComponent = () => {
    return <Text>{'ListHeaderComponent'}</Text>;
  };

  render() {
    const { transactions } = this.props;
    const sections = [
      {
        title: 'Title1',
        data: transactions
      }
    ];
    return (
      <SectionList
        ListHeaderComponent={this.ListHeaderComponent}
        onViewableItemsChanged={this.handleViewableItemsChanged}
        renderSectionHeader={this.renderSectionHeader}
        stickySectionHeadersEnabled={true}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        sections={sections}
        style={styles.container}
      />
    );
  }
}

export default connect(selectors)(TransactionsTab);
