// @flow
import React from 'react';
import { connect } from 'react-redux';
import ScrollView from 'components/ScrollView';
import View from 'components/View';
import SearchBox from 'components/SearchBox';
// import ActivityIndicatorView from 'hooks/ActivityIndicatorView';

import ListEmpty from 'hooks/ContactList/ListEmpty';

import { Animated } from 'react-native';
// import { Text } from 'react-native-svg';
import selector from './selectors';
import useStyles from './useStyles';
import type { Props, State } from '../../../ContactsScreen/types';
import actions from './actions';
import { Item, ListHeader, ListFooter } from '../../../ContactsScreen/components';

class ContactsPaymentTab extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).renderItem = this.renderItem.bind(this);
    (this: any).renderListHeader = this.renderListHeader.bind(this);
    (this: any).renderListFooter = this.renderListFooter.bind(this);
    (this: any).renderListEmpty = this.renderListEmpty.bind(this);

    (this: any).searchBox = React.createRef();

    this.scrollPos = new Animated.Value(0);
    this.scrollSinkY = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.scrollPos } } }],
      { useNativeDriver: true },
    );
    // this.state = {
    //   isSearching: false,
    //   isFetchingContacts: true,
    // };
  }

  componentDidMount() {
    // const { getContacts } = this.props;
    // getContacts()
    //   .finally(() => this.setState({ isFetchingContacts: false }));
  }

  componentWillUnmount() {
    const { clearFilter } = this.props;
    clearFilter();
  }

  renderListFooter() {
    return <ListFooter {...this.props} />;
  }

  renderItem({ item }: { item: Object }) {
    return <Item {...item} onPress={this.handlePress} />;
  }

  renderListHeader = props => (<ListHeader {...props} />);

  renderListEmpty() {
    return <ListEmpty {...this.props} />;
  }


  renderMostFrequentContactsBody() {
    const styles = useStyles();
    const { sections } = this.props;
    return (
      <Animated.SectionList
        contentContainerStyle={styles.contentContainer}
        renderSectionHeader={this.renderListHeader}
        ListFooterComponent={this.renderListFooter}
        ListEmptyComponent={this.renderListEmpty}
        keyExtractor={({ username }) => username}
        sections={sections}
        renderItem={this.renderItem}
        onScroll={this.scrollSinkY}
      />
    );
  }

  renderContactsBody() {
    const styles = useStyles();
    const { sections } = this.props;
    return (
      <Animated.SectionList
        contentContainerStyle={styles.contentContainer}
        renderSectionHeader={this.renderListHeader}
        ListFooterComponent={this.renderListFooter}
        ListEmptyComponent={this.renderListEmpty}
        keyExtractor={({ username }) => username}
        sections={sections}
        renderItem={this.renderItem}
        onScroll={this.scrollSinkY}
      />
    );
  }

  render() {
    const styles = useStyles();
    const searchBoxStyles = {
      paddingLeft: 16,
      paddingRight: 32,
      backgroundColor: '#000000',
    };
    // const animatedStyle = {
    //   transform: [
    //     {
    //       translateY: this.scrollPos.interpolate({
    //         inputRange: [0, 150],
    //         outputRange: [0, -150],
    //         extrapolateRight: 'clamp',
    //         extrapolateLeft: 'clamp',
    //       }),
    //     },
    //   ],
    // };
    // FIXME : Hooks can only be called inside the body of a function component error
    // const checkIsActiveRequest = () => {
    //   const { isSearching, isFetchingContacts } = this.state;
    //   const { sections } = this.props;
    //   const isActiveRequest = isSearching || isFetchingContacts;
    //   if (isActiveRequest && sections.length === 0) {
    //     return true;
    //   }
    // };
    // if (checkIsActiveRequest()) {
    //   return <ActivityIndicatorView />;
    // }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <SearchBox
            placeholder="Search by username or alias"
            style={searchBoxStyles}
            searchBox={this.searchBox}
          />
          {/* <Animated.View style={[styles.header, animatedStyle]}> */}
          {/*  <Text>Most frequent</Text> */}
          {/* <View style={styles.mostFrequentBody}> */}
          {/*  {this.renderMostFrequentContactsBody({limit:3)} */}
          {/* </View> */}
          {/* <View style={styles.contactBody}> */}
          {/*  {this.renderContactsBody()} */}
          {/* </View> */}
          {/* </Animated.View> */}
        </View>
      </ScrollView>
    );
  }
}


export default connect(
  selector,
  actions,
)(ContactsPaymentTab);
