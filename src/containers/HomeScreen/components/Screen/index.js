/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { ProgressBar } from 'components';
import { SharedElement } from 'components';
import { Reanimatable } from 'libraries';
import { Logo } from 'components';
import { Avatar } from 'components';
import IconButton from '../IconButton';
import defaultProps from './props';
import styles from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';
import { Balance } from 'containers';

const Screen = (props: Props): ReactElement => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Reanimatable
        duration={1000}
        ref={props.reanimatableRefs[2]}
        style={styles.reanimatable2}>
        <Balance />
      </Reanimatable>
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
            <View style={styles.badgeWrapper}>
              <Reanimatable
                duration={1000}
                ref={props.reanimatableRefs[1]}
                style={styles.reanimatable}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{'3'}</Text>
                </View>
              </Reanimatable>
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <IconButton
              source={require('assets/images/icon-paperplane.png')}
              text="Pay"
              action={() => props.navigate.push('SendScreen')}
            />
            <IconButton
              source={require('assets/images/icon-bank.png')}
              text="Receive"
              action={() => props.navigate.push('ReceiveScreen')}
            />
            <IconButton
              source={require('assets/images/icon-people.png')}
              text="Contacts"
              action={() => props.navigate.push('ContactsScreen')}
            />
          </View>
        </Reanimatable>
      </View>
    </View>
  </View>
);

Screen.defaultProps = defaultProps;
export default Screen;
