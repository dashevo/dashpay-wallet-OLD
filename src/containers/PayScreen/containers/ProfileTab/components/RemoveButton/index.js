/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import Button from 'components/Button';
import View from 'components/View';
import Text from 'components/Text';

function RemoveButton(props) {
  return (
    <Button {...props}>
      {({ styles }) => (
        <View style={styles.container}>
          <Text style={styles.text}>Remove Contact</Text>
        </View>
      )}
    </Button>
  );
}

export default RemoveButton;
