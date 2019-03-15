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
        icon="pay"
        text="Pay"
        action={() => props.navigation.navigate('SendScreen')}
      />
      <IconButton
        icon="receive"
        text="Receive"
        action={() => props.navigation.navigate('ReceiveScreen')}
      />
      <IconButton
        icon="contacts"
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
