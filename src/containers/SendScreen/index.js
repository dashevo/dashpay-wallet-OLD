/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Internal dependencies
import { convert } from 'libraries/currencies';
import { View } from 'components';
import { NavBar } from 'components';
import { Form } from 'components';
import { ScrollView } from 'components';
import { Image } from 'components';
import { RecipientField } from './components';
import { AmountField } from './components';
import { ErrorMessage } from './components';
import { PayButton } from './components';
import actions from './actions';
import selector from './selectors';
import defaultProps from './defaults';
import styles from './styles';
import type { Props } from './types';

class SendScreen extends React.Component<Props> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    const {
      initialValues,
      validationSchema,
      currencies,
      conversions
    } = this.props;

    (this: any).handleSubmit = this.handleSubmit.bind(this);
    (this: any).convertAmount = this.convertAmount.bind(this);

    this.state = {
      conversions,
      convertAmount: this.convertAmount,
      currencies,
      initialValues,
      onSubmit: this.handleSubmit,
      validationSchema
    };
  }

  convertAmountToDASH(amount, fromCurrency) {
    const conversions = this.props.conversions;
    return convert(amount, fromCurrency, 'DASH', conversions);
  }

  convertAmount(amount, fromCurrency, toCurrency) {
    const conversions = this.props.conversions;
    return convert(amount, fromCurrency, toCurrency, conversions);
  }

  handleSubmit(values) {
    const amount = this.convertAmountToDASH(values.amount, values.currency);
    const transactionData = Object.assign({}, values, { amount });
    this.props
      .createTransaction(transactionData)
      .then(console.log, console.log);
  }

  render(): React.Element<any> {
    const { initialValues } = this.props;
    return (
      <View style={styles.container}>
        <NavBar />
        <Form {...this.state} initialValues={initialValues}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{
              flexGrow: 1
            }}>
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
                  <ErrorMessage />
                </View>
                <View style={styles.row}>
                  <PayButton />
                </View>
              </View>
            </View>
          </ScrollView>
        </Form>
      </View>
    );
  }
}

SendScreen = connect(
  selector,
  actions
)(SendScreen);

export default SendScreen;
