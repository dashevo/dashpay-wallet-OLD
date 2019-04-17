// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Text from 'components/Text';
import actions from './actions';
import styles from './styles';

const SendRequestButton = ({ sendContactRequest }) =>(
  <TouchableOpacity style={styles.button} onPress={sendContactRequest}>
    <Text>Send Request</Text>
  </TouchableOpacity>
);

export default connect(
  null,
  actions,
)(SendRequestButton);
