/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Internal dependencies
import Avatar from 'hooks/Avatar';
import useTranslate from 'hooks/Translate';
import useStyles from './useStyles';

function ContactRequestRejected({ sender, timestamp }) {
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
          <Text style={styles.subtitle}>{translate('Ignored from contacts')}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.underlined}>
          <View style={styles.center}>
            <Text style={styles.underlinedText}>
              {translate('IGNORED | {{ timestamp }}', {
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

ContactRequestRejected.propTypes = {
  timestamp: PropTypes.string.isRequired,
  sender: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactRequestRejected;
