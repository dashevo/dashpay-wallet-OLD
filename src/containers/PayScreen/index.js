/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Internal dependencies
import ScrollView from 'components/ScrollView';
import Form from 'components/Form';
import View from 'components/View';
import Tabs from './navigations';
import defaults from './defaults';
import styles from './styles';
import selector from './selectors';
import actions from './actions';
type Props = {};
type State = {};

class PayTab extends React.Component<Props, State> {
  static router = Tabs.router;
  static defaultProps = defaults;

  constructor(props: Props) {
    super(props);

    this.state = {
      validationSchema: props.validationSchema,
      initialValues: props.initialValues,
      onSubmit: this._onSubmit
    };
  }

  _onSubmit = values => {
    this.props.createTransaction(values)
      .then(console.log, console.log)
  };

  render() {
    const { navigation } = this.props;
    return (
      <Form {...this.state}>
        <Tabs navigation={navigation} />
      </Form>
    );
  }
}

PayTab = connect(
  selector,
  actions
)(PayTab);

export default PayTab;
