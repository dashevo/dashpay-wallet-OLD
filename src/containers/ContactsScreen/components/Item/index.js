/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { TouchableOpacity } from 'components';
import { View } from 'components';
import { Image } from 'components';
import { Text } from 'components';
import type { Props } from './types';
import styles from './styles';

class Item extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    (this: any).handlePress = this.handlePress.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  handlePress(event) {
    this.props.onPress(this.props.address)
  }

  render(): React.Element<any> {
    const { name, state, image } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: image }} />
          <View>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.state}>{(state || '').toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Item;
