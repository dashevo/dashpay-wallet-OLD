/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import View from 'components/View';
import { IconButton } from 'components';

function IconBar(props) {
  const { icon } = props;
  const { name } = props;

  return (
    <View style={styles.buttonGroup}>
      <IconButton
        source={require('assets/images/icon-paperplane.png')}
        text="Pay"
        action={() => props.navigation.navigate('SendScreen')}
      />
      <IconButton
        source={require('assets/images/icon-bank.png')}
        text="QR Code"
        action={() => props.navigation.navigate('ScannerScreen')}
      />
      <IconButton
        source={require('assets/images/icon-people.png')}
        text="Contacts"
        action={() => props.navigation.navigate('ContactsScreen')}
      />
    </View>
  );
}

const styles = {
  ['buttonGroup']: {
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 0
  }
};

export default IconBar;
