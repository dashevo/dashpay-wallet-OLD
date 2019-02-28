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
        action={() => props.navigation.push('SendScreen')}
      />
      <IconButton
        source={require('assets/images/icon-bank.png')}
        text="Receive"
        action={() => props.navigation.push('ReceiveScreen')}
      />
      <IconButton
        source={require('assets/images/icon-people.png')}
        text="Contacts"
        action={() => props.navigation.push('ContactsScreen')}
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
