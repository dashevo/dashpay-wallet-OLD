/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import ScrollView from 'components/ScrollView';
import Form from 'components/Form';
import View from 'components/View';
import RecipientField from './components/RecipientField';
import AmountField from './components/AmountField';
import PayButton from './components/PayButton';
import defaults from './defaults';
import styles from './styles';
type Props = {};
type State = {};

class PayTab extends React.Component<Props, State> {
  static defaultProps = defaults;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <RecipientField />
        </View>
        <View style={styles.row}>
          <AmountField />
        </View>
        <View style={styles.row}>
          <PayButton />
        </View>
      </ScrollView>
    );
  }
}

export default PayTab;
