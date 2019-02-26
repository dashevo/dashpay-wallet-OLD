/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Composed } from 'components/NavBar';
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';
import styles from "./styles"

function NavBar(props) {
  return (
    <Composed styles={styles}>
      {({ styles }) => (
        <View style={styles.container}>
          <View style={styles.body} />
          <View style={styles.right}>
            <TouchableOpacity style={styles.button} onPress={props.showMenu}>
              <Icon style={styles.icon} name={'bell'} />
              <Text style={styles.text}>{'3'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.showMenu}>
              <Icon style={styles.icon} name={'bars'} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Composed>
  );
}

export default NavBar;
