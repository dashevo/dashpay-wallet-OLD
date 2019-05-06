/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Internal dependencies
import { Avatar } from 'hooks/Avatar';
import useTranslate from 'hooks/Translate';
import Transition from './Transition';
import useStyles from './useStyles';

function ContactRequestReceived({
  sender, onAccept, onReject, timestamp,
}) {
  const translate = useTranslate();
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.center}>
          <Avatar sm user={sender} />
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{sender.displayName}</Text>
          <Text style={styles.subtitle}>{translate('Wants to be a Contacts')}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Transition onAccept={onAccept} onReject={onReject} sender={sender} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.metadata}>
          {translate('Requested | {{ timestamp }}', {
            timestamp,
          })}
        </Text>
      </View>
    </View>
  );
}

ContactRequestReceived.propTypes = {
  timestamp: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
  sender: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactRequestReceived;
