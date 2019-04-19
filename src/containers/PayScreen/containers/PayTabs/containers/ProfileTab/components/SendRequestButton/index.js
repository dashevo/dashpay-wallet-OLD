// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Text from 'components/Text';
import actions from './actions';
import styles from './styles';
import Types from './types';

const SendRequestButton = ({ address, sendContactRequest }: Types) => (
  <TouchableOpacity style={styles.button} onPress={() => sendContactRequest(address)}>
    <Text>Send Request</Text>
  </TouchableOpacity>
);

export default connect(
  null,
  actions,
)(SendRequestButton);
