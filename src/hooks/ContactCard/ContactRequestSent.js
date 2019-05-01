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

function ContactRequestSent({ sender, receiver, timestamp }) {
  const translate = useTranslate();
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Avatar sm user={sender} />
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>{sender.displayName}</Text>
            <Text style={styles.subtitle}>
              {translate('Requesting Contact')}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.underlined}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Avatar sm user={receiver} />
            </View>
            <View style={styles.col}>
              <Text style={styles.title}>{receiver.displayName}</Text>
              <Text style={styles.subtitle}>
                {translate('Pending Request')}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.metadata}>
          {translate('Sent | {{ timestamp }}', {
            timestamp
          })}
        </Text>
      </View>
    </View>
  );
}

export default ContactRequestSent;
