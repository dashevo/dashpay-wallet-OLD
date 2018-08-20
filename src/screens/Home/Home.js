/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
'use strict';

import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).handlePress = this.handlePress.bind(this);
  }

  handlePress(event: Object) {
    this.props.navigation.navigate('Settings');
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>DashPay / Home</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consequat risus et mauris porta, et vulputate tortor rutrum. Aliquam
          eu aliquet tellus, euismod varius lorem.
        </Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.link}>Navigate to Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
