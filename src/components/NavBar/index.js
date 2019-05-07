/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import Text from 'components/Text';
import Icon from 'components/Icon';
import Styles from 'components/Styles';
import { compose } from 'utilities';
import defaultStyles from './styles';

export const Composed = compose([props => <Styles {...props} styles={defaultStyles} />]);

function NavBar({ scene, navigation, showMenu }) {
  const { options } = scene.descriptor;
  const { title = '' } = options;
  return (
    <Composed>
      {({ styles }) => (
        <SafeAreaView style={styles.container}>
          <View style={styles.body}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Icon style={styles.icon} name="chevron-left" />
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
                navigation.navigate('ActivitiesScreen');
              }}
            >
              <Icon style={styles.icon} name="squiggle" />
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={showMenu}>
              <Icon style={styles.icon} name="bars" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Composed>
  );
}

NavBar.propTypes = {
  showMenu: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  scene: PropTypes.shape({
    descriptor: PropTypes.object.isRequired,
  }).isRequired,
};

export default NavBar;
