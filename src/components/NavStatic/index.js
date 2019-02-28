import React from 'react';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import { Icon } from 'components';
import Styles from 'components/Styles';
import styles from './styles';
import { compose } from 'utilities';

const Composed = compose([
  (props: Props): React.Element<any> => <Styles {...props} styles={styles} />
]);

class StaticNav extends React.PureComponent {
  render() {
    const { navigation, showMenu } = this.props;
    return (
      <Composed>
        {({ styles }) => (
          <View style={styles.container} pointerEvents='box-none'>
            <TouchableOpacity style={styles.button} onPress={showMenu}>
              <Icon style={styles.icon} name={'squiggle'} />
              <Text style={styles.text}>{'3'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={showMenu}>
              <Icon style={styles.icon} name={'bars'} />
            </TouchableOpacity>
          </View>
        )}
      </Composed>
    );
  }
}

export default StaticNav;
