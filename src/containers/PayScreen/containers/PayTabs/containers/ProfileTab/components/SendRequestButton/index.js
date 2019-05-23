// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Text from 'components/Text';
import Button from 'components/Button';
import actions from './actions';
import Types from './types';

const SendRequestButton = ({ address, sendContactRequest }: Types) => (
  <Button onPress={() => sendContactRequest(address)}>
    {({ bind, styles }) => (
      <TouchableOpacity style={styles.container} {...bind}>
        <Text style={styles.text}>Send Request</Text>
      </TouchableOpacity>
    )}
  </Button>
);

export default connect(
  null,
  actions,
)(SendRequestButton);
