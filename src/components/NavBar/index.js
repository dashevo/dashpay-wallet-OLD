/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';
import styles from './styles';
import { compose } from 'utilities';
import Styles from '../Styles';

const Composed = compose([
  (props: Props): React.Element<any> => <Styles {...props} styles={styles} />
]);

function Navbar(props) {
  const { options } = props.scene.descriptor;
  const { title } = options;
  return (
    <Composed>
      {({ styles }) => (
        <View style={styles.container}>
          <View style={styles.body}>
            <TouchableOpacity
              style={styles.button}
              onPress={props.navigation.goBack}>
              <Icon style={styles.icon} name={'chevron-left'} />
            </TouchableOpacity>
            <View style={styles.wrapper}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </View>
          <View style={styles.right}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Icon style={styles.icon} name={'bell'} />
              <Text style={styles.text}>{'3'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Icon style={styles.icon} name={'bars'} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Composed>
  );
}

export default Navbar;
