/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Internal dependencies
import Form from 'components/Form';
import View from 'components/View';
import Text from 'components/Text';
import AutoSubmit from 'components/AutoSubmit';
import RecipientField from './components/RecipientField';
import selector from './selectors';
import defaults from './defaults';
import styles from './styles';
type Props = {};
type State = {};

class PayScreen extends React.Component<Props, State> {
  static defaultProps = defaults;

  constructor(props: Props) {
    super(props);

    const onSubmit = this.handleSubmit.bind(this);

    this.state = {
      ...props.formProps,
      onSubmit
    };
  }

  handleSubmit(values: Object) {
    this.props.navigation.replace('PayTabs', values);
  }

  render(): React.Element<any> {
    return (
      <Form {...this.state}>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.row}>
              <Text style={styles.title}>{'Pay'}</Text>
            </View>
            <View style={styles.row}>
              <RecipientField />
            </View>
            <View style={styles.row}>
              <AutoSubmit />
            </View>
          </View>
        </View>
      </Form>
    );
  }
}

PayScreen = connect(selector)(PayScreen);

export default PayScreen;
