/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Internal dependencies
import { Container } from 'components';
import ScrollView from 'components/ScrollView';
import Form from 'components/Form';
import View from 'components/View';
import SlideInUp from './components/SlideInUp';
import ImageField from './components/ImageField';
import AmountField from './components/AmountField';
import PayButton from './components/PayButton';
import Transactions from './components/Transactions';
import defaults from './defaults';
import selector from './selectors';
import actions from './actions';
import styles from './styles';
type Props = {};
type State = {};

class PayTab extends React.Component<Props, State> {
  static defaultProps = defaults;

  constructor(props: Props) {
    super(props);

    this.state = {
      convertToDashAmount: this.convertToDashAmount,
      convertToFiatAmount: this.convertToFiatAmount,
      validationSchema: props.validationSchema,
      initialValues: props.initialValues,
      onSubmit: this._onSubmit
    };
  }

  convertToDashAmount = fiatAmount => {
    return fiatAmount / 79.29; // Tmp
  };

  convertToFiatAmount = dashAmount => {
    return dashAmount * 79.29; // Tmp
  };

  _onSubmit = (values, form) => {
    const amountDash = values.amount;
    const amountFiat = this.convertToFiatAmount(amountDash);
    const transactionData = Object.assign({}, values, { amountDash });
    const feeAmount = 1; //TODO this is wrong on purpose.
    // we need to prepare a transaction with the library and pass that
    // and if it is confirmed, ask the library to broadcast it.
    const feeFiat = 1;
    const totalFiat = 1;
    const destinationAddress = '';
    this.props.navigation.navigate('ConfirmationScreen', {
      fiatSymbol: 'USD',
      amountDash: amountDash,
      amountFiat: amountFiat,
      feeDash: feeAmount,
      feeFiat: feeFiat,
      totalFiat: totalFiat,
      destinationAddress: values.recipient,
      toAvatar: require('assets/images/icon-temp.png'),
      fromAvatar: require('assets/images/icon-temp.png'),
      onConfirmation: () => {
        this.props.createTransaction(transactionData);
        this.props.navigation.goBack(); //TODO go to payment history
      }
    });

    this.props.createPaymentTransaction(values);
    form.resetForm();
  };

  render() {
    const { transactions } = this.props;
    return (
      <Container>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}>
          <SlideInUp fromValue={100}>
            <Form {...this.state}>
              <View style={styles.row}>
                <ImageField {...this.props} />
              </View>
              <View style={styles.row}>
                <AmountField />
              </View>
              <View style={styles.row}>
                <PayButton />
              </View>
              <View style={styles.row}>
                <Transactions data={transactions} />
              </View>
            </Form>
          </SlideInUp>
        </ScrollView>
      </Container>
    );
  }
}

PayTab = connect(
  selector,
  actions
)(PayTab);

export default PayTab;
