// @flow
import React from 'react';
import { connect } from 'react-redux';
import ScrollView from 'components/ScrollView';
import View from 'components/View';
import Text from 'components/Text';
import selector from './selectors';
import useStyles from './useStyles';

const ContactsPaymentTab = () => {
  const styles = useStyles();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.username}>
          Contacts Payment Tab
        </Text>
      </View>
    </ScrollView>
  );
};

export default connect(selector)(ContactsPaymentTab);
