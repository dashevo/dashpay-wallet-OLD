// @flow
import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'components';
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

  handlePress() {
    const { onPress, name, address } = this.props;
    onPress({
      name,
      recipient: address,
    });
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
