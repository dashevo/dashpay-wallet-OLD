/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SharedElement } from 'components';
import { Reanimatable } from 'libraries';
import { Logo } from 'components';
import { Avatar } from 'components';
import { IconButton } from 'components';
import defaultProps from './props';
import styles from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';

import { StackActions, NavigationActions } from 'react-navigation';

const Screen = (props: Props): ReactElement => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    </View>
    <View style={styles.body}>
      <View style={styles.section}>
        <SharedElement elementId={props.elementId}>
          <Logo style={styles.logo} />
        </SharedElement>
      </View>
      <View style={styles.section}>
        <Reanimatable
          duration={1000}
          ref={props.reanimatableRefs[0]}
          style={styles.reanimatable}>
          <View style={styles.avatar}>
            <Avatar source={require('assets/images/avatar-default.png')} />
            <TouchableOpacity
              style={styles.badgeWrapper}
              onPress={() => props.navigation.push('NotificationsScreen')}>
              <Reanimatable
                duration={1000}
                ref={props.reanimatableRefs[1]}
                style={styles.reanimatable}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{'3'}</Text>
                </View>
              </Reanimatable>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <IconButton
              source={require('assets/images/icon-paperplane.png')}
              text="Pay"
              action={() => props.navigation.push('SendScreen')}
            />
            <IconButton
              source={require('assets/images/icon-bank.png')}
              text="Receive"
              action={() => props.navigation.push('ReceiveScreen')}
            />
            <IconButton
              source={require('assets/images/icon-people.png')}
              text="Contacts"
              action={() => props.navigation.push('ContactsScreen')}
            />
          </View>
          <View style={styles.buttonGroup}>
            <IconButton
              source={require('assets/images/icon-temp.png')}
              text="QR Code"
              action={() => {
                const resetAction = StackActions.reset({
                  index: 2,
                  actions: [
                    StackActions.push({ routeName: 'HomeScreen' }),
                    StackActions.push({ routeName: 'SendScreen' }),
                    StackActions.push({ routeName: 'ScannerScreen' })
                  ]
                });
                props.navigation.dispatch(resetAction);
              }}
            />
          </View>
        </Reanimatable>
      </View>
    </View>
  </SafeAreaView>
);

Screen.defaultProps = defaultProps;
export default Screen;
