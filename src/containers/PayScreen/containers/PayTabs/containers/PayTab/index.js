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

  convertToDashAmount = dashAmount => {
    return dashAmount / 79.29;
  };

  convertToFiatAmount = dashAmount => {
    return dashAmount * 79.29;
  };

  _onSubmit = (values, form) => {
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
