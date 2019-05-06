/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import Text from 'components/Text';
import Icon from 'components/Icon';
import Styles from 'components/Styles';
import styles from './styles';
import { compose } from 'utilities';

export const Composed = compose([
  (props: Props): React.Element<any> => <Styles {...props} styles={styles} />
]);

function NavBar(props) {
  const { options } = props.scene.descriptor;
  const { title = '', params = {} } = options;
  return (
    <Composed>
      {({ styles }) => (
        <SafeAreaView style={styles.container}>
          <View style={styles.body}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.goBack()}>
              <Icon style={styles.icon} name={'chevron-left'} />
            </TouchableOpacity>
            <View style={styles.wrapper}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </View>
          <View style={styles.right}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate('ActivitiesScreen');
              }}>
              <Icon style={styles.icon} name={'squiggle'} />
              <Text style={styles.text}>{'3'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.showMenu}>
              <Icon style={styles.icon} name={'bars'} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Composed>
  );
}

export default NavBar;
