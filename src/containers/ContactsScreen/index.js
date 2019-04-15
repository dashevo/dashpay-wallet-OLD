// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  InteractionManager,
} from 'react-native';

import {
  Image,
  View,
} from 'components';
import actions from './actions';
import selector from './selectors';
import styles from './styles';
import type { Props, State } from './types';
import {
  ListEmpty,
  ListFooter,
  ListHeader,
  Item,
  SearchBox,
} from './components';

class ContactsScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).renderItem = this.renderItem.bind(this);
    (this: any).renderListHeader = this.renderListHeader.bind(this);
    (this: any).renderListFooter = this.renderListFooter.bind(this);
    (this: any).renderListEmpty = this.renderListEmpty.bind(this);

    (this: any).handlePress = this.handlePress.bind(this);
    (this: any).handleSubmit = this.handleSubmit.bind(this);

    (this: any).searchBox = React.createRef();

    this.scrollPos = new Animated.Value(0);
    this.scrollSinkY = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.scrollPos } } }],
      { useNativeDriver: true },
    );
  }

  componentDidMount() {
    const { getBlockchainContacts } = this.props;
    getBlockchainContacts();
  }

  keyExtractor = ({ address }) => address;

  componentWilUnmount() {
    const { clearFilter } = this.props;
    clearFilter();
  }

  async handlePress(params: string) {
    const { navigation } = this.props;
    navigation.navigate('PayTabs', params);

    await InteractionManager.runAfterInteractions();
    if (this.searchBox.current.resetForm) {
      this.searchBox.current.setFieldValue('query', '');
      this.searchBox.current.submitForm();
    }
  }

  handleSubmit(values: Object) {
    const { setFilter } = this.props;
    const { query } = values;
    setFilter({ query: query.trim() });
  }

  renderListFooter(): React.Element<any> {
    return <ListFooter {...this.props} />;
  }

  renderItem({ item }: { item: Object }): React.Element<any> {
    return <Item {...item} onPress={this.handlePress} />;
  }

  renderListHeader: React.Element<any> = props => (<ListHeader {...props} />);

  renderListEmpty(): React.Element<any> {
    return <ListEmpty {...this.props} />;
  }

  render(): React.Element<any> {
    const animatedStyle = {
      transform: [
        {
          translateY: this.scrollPos.interpolate({
            inputRange: [0, 150],
            outputRange: [0, -150],
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
          }),
        },
      ],
    };
    const { contacts } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Animated.SectionList
            contentContainerStyle={styles.contentContainer}
            renderSectionHeader={this.renderListHeader}
            ListFooterComponent={this.renderListFooter}
            ListEmptyComponent={this.renderListEmpty}
            keyExtractor={this.keyExtractor}
            sections={contacts}
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
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default connect(
  selector,
  actions,
)(ContactsScreen);
