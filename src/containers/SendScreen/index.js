/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Internal dependencies
import { View } from 'components';
import { NavBar } from 'components';
import { Form } from 'components';
import { ScrollView } from 'components';
import { Image } from 'components';
import { RecipientField } from './components';
import { AmountField } from './components';
import { PayButton } from './components';
import defaultProps from './defaults';
import styles from './styles';
import type { Props } from './types';

function SendScreen(props: Props): React.Element<any> {
  return (
    <View style={styles.container}>
      <NavBar />
      <Form {...props}>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            flexGrow: 1
          }}>
          <View style={styles.container}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Image
                  style={styles.dash}
                  source={require('assets/flags/dash.png')}
                />
                <View style={styles.row}>
                  <RecipientField />
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.row}>
                  <AmountField />
                </View>
              </View>
              <View style={styles.footer}>
                <View style={styles.row}>
                  <PayButton />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Form>
    </View>
  );
}

SendScreen.defaultProps = defaultProps;
SendScreen = connect(
  null,
  {}
)(SendScreen);

export default SendScreen;
