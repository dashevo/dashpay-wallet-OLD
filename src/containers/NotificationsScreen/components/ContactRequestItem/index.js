import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CONTACT_STATES } from 'state';
import styles from './styles';

const ContactRequestItem = ({ address, state }, key, approveContactRequest): React.Element<any> => {
  const handleClick = () => {
    switch(state) {
      case CONTACT_STATES.REQUEST_RECEIVED:
        approveContactRequest(address);
    }
  };

  return (
    <View style={styles.container} key={key}>
      <TouchableOpacity onPress={handleClick}>
        <Text>{ `${address} (${state})` }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactRequestItem;
