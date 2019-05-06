/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

// Internal dependencies
import { Avatar } from 'hooks/Avatar';
import useTranslate from 'hooks/Translate';
import useStyles from './useStyles';

function ContactRequestAccepted({ sender, receiver, timestamp }) {
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
          <Text style={styles.subtitle}>{translate('Added to Contacts')}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.underlined}>
          <View style={styles.center}>
            <Text style={styles.underlinedText}>
              {translate('ADDED | {{ timestamp }}', {
                timestamp,
              })}
            </Text>
          </View>
        </View>
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

export default ContactRequestAccepted;
