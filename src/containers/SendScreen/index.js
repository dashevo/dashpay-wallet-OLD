/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { TextInput, View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { AmountField } from './components';
import { RecipientField } from './components';
import { Button } from './components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { NavBar } from 'components';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';
import connect from 'react-redux/es/connect/connect';
import selector from './selectors';
import actions from './actions';

class SendScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.state = {
      visible: false
    };
  }

  async handleOnPress(event) {
    this.setState({
      visible: !this.state.visible
    });
    const paymentOpts = {
      recipient: this.props.values.recipient,
      amount: this.props.values.dash
    };
    const rawtx = await this.props.createTransaction(paymentOpts);
    const txid = await this.props.broadcastTransaction(rawtx.response);
  }

  render(): React.Element<any> {
    const { visible } = this.state;
    console.log(
      '__SendScreen/this.props.initialValues__',
      this.props.initialValues
    );
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <NavBar navigation={this.props.navigation} isOpen={true} />
        </View>
        <ScrollView
          style={styles.scrollBody}
          contentContainerStyle={styles.body}>
          <Text style={[styles.text, styles.heading]}>Pay Address</Text>
          <View style={styles.section}>
            <RecipientField {...this.props} />
          </View>
          <View style={styles.section}>
            <AmountField {...this.props} />
          </View>
          <View style={styles.section}>
            <Text>
              {visible &&
                JSON.stringify({
                  recipient: this.props.values.recipient,
                  amount: this.props.values.dash
                })}
            </Text>
          </View>
          <View style={styles.section}>
            <Button {...this.props} onPress={this.handleOnPress} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

SendScreen = SendScreen = connect(
  selector,
  actions
)(SendScreen);

SendScreen = withFormik({
  mapPropsToValues: () => ({
    dash: '',
    currency: ''
  }),
  validationSchema: Yup.object().shape({
    dash: Yup.number().required('Required'),
    currency: Yup.number().required('Required')
  }),
  handleSubmit: values => {},
  displayName: 'Validation'
})(SendScreen);

export default SendScreen;
