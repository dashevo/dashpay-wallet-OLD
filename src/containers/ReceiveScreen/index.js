/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
// import { Image } from 'react-native';
// import { Avatar } from 'components/avatar';

import styles from './styles';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import { wallet, account } from '../../provider/WalletProvider';


class ReceiveScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.unusedAddress = account.getUnusedAddress().address || 'unusedAddr';
  }
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.unusedAddress}</Text>
      </View>
    );
  }
};

export { ReceiveScreen };
