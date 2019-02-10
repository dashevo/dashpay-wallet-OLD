/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import ScrollView from 'components/ScrollView';
import View from 'components/View';
import Toggle from 'components/Toggle';
import ColorField from './components/ColorField';
import ImageField from './components/ImageField';
import NameField from './components/NameField';
import AddressField from './components/AddressField';
import Metadata from './components/Metadata';
import RemoveButton from './components/RemoveButton';
import styles from './styles';

function ProfileTab(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Toggle initial={true}>
        {({ on, off, setOn, setOff }) => (
          <View style={styles.fieldset}>
            {on && (
              <View style={styles.row}>
                <ImageField onPress={setOff} />
              </View>
            )}
            {off && (
              <View style={styles.row}>
                <ColorField onPress={setOn} />
              </View>
            )}
            {on && (
              <View style={styles.row}>
                <NameField />
              </View>
            )}
            {on && (
              <View style={styles.row}>
                <AddressField />
              </View>
            )}
            {on && (
              <View style={styles.row}>
                <Metadata />
                <RemoveButton />
              </View>
            )}
          </View>
        )}
      </Toggle>
    </ScrollView>
  );
}

export default ProfileTab;
