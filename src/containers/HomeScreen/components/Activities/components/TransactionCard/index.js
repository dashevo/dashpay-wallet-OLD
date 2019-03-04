/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { FormattedDate } from 'react-intl';
import { FormattedTime } from 'react-intl';
import { FormattedNumber } from 'react-intl';

// Internal dependencies
import Button from 'components/Button';
import Card from 'components/Card';
import Avatar from 'components/Avatar';
import Touchable from 'components/Touchable';
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';

function SmallAvatar(props) {
  return (
    <Avatar {...props} sm>
      {({ bind, touched, styles, children }) => (
        <View style={styles.container}>
          <View style={styles.body}>{children}</View>
        </View>
      )}
    </Avatar>
  );
}

class TransactionCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleAcceptBlockchainContact = e => {
    const { item } = this.props;
    this.setState({ isLoading: true });
    this.props
      .onAcceptBlockchainContact(item)
      .then(
        () => this.setState({ isLoading: false }),
        () => this.setState({ isLoading: false })
      );
  };

  handleRejectBlockchainContact = e => {
    const { item } = this.props;
    Alert.alert(
      'Reject Contact Request',
      `Are you sure you want to reject the contact request from ${
        item.sender.name
      }?`,
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            this.setState({ isLoading: true });
            this.props
              .onRejectBlockchainContact(item)
              .then(
                () => this.setState({ isLoading: false }),
                () => this.setState({ isLoading: false })
              );
          }
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { item } = this.props;
    const { sender, timestamp } = item;
    if (item.type === 'accepted') {
      return (
        <Card onPress={() => {}}>
          {({ bind, touched, styles }) => (
            <View style={styles.tmp}>
              <Touchable {...bind}>
                <View style={styles.container}>
                  <View style={styles.header}>
                    <View style={styles.row}>
                      <View style={styles.avatar}>
                        <SmallAvatar name={sender.name} image={sender.image} />
                      </View>
                      <View style={styles.metadata}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          <Text style={styles.title} numberOfLines={1}>
                            {sender.name}
                          </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          <Text style={styles.subtitle} numberOfLines={1}>
                            {'Added to Contacts.'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.footer}>
                    <FormattedTime
                      value={timestamp}
                      year="numeric"
                      month="long"
                      day="numeric">
                      {formattedTime => (
                        <Text style={styles.small}>
                          ADDED | {formattedTime}
                        </Text>
                      )}
                    </FormattedTime>
                  </View>
                  {this.state.isLoading && (
                    <View
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                        borderRadius: 3
                      }}>
                      <Text style={styles.small}>loading</Text>
                    </View>
                  )}
                </View>
              </Touchable>
            </View>
          )}
        </Card>
      );
    } else {
      return (
        <Card onPress={() => {}}>
          {({ bind, touched, styles }) => (
            <View style={styles.tmp}>
              <Touchable {...bind}>
                <View style={styles.container}>
                  <View style={styles.header}>
                    <View style={styles.row}>
                      <View style={styles.avatar}>
                        <SmallAvatar name={sender.name} image={sender.image} />
                      </View>
                      <View style={styles.metadata}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          <Text style={styles.title} numberOfLines={1}>
                            {sender.name}
                          </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          <Text style={styles.subtitle} numberOfLines={1}>
                            {'Wants to be a Contact.'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.body}>
                    <View style={styles.row}>
                      <Button primary full sm>
                        {({ styles }) => (
                          <TouchableOpacity
                            style={styles.container}
                            onPress={this.handleAcceptBlockchainContact}>
                            <Text style={styles.text}>Yes</Text>
                          </TouchableOpacity>
                        )}
                      </Button>
                      <View style={{ width: 16 }} />
                      <Button secondary full sm>
                        {({ styles }) => (
                          <TouchableOpacity
                            style={styles.container}
                            onPress={this.handleRejectBlockchainContact}>
                            <Text style={styles.text}>No</Text>
                          </TouchableOpacity>
                        )}
                      </Button>
                    </View>
                  </View>
                  <View style={styles.footer}>
                    <FormattedTime
                      value={timestamp}
                      year="numeric"
                      month="long"
                      day="numeric">
                      {formattedTime => (
                        <Text style={styles.small}>
                          RECEIVED | {formattedTime}
                        </Text>
                      )}
                    </FormattedTime>
                  </View>
                  {this.state.isLoading && (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        borderColor: 'rgba(255, 255, 255, 0.75)',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                        borderRadius: 3
                      }}>
                      <ActivityIndicator size="large" color="#088BE2" />
                    </View>
                  )}
                </View>
              </Touchable>
            </View>
          )}
        </Card>
      );
    }
  }
}

export default TransactionCard;
