// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { Formik } from 'formik';
import {
  View,
  Text,
  Input,
} from 'components';
import schema from './schema';
import styles from './styles';

import type {
  FormikProps,
  FormValues,
  Props,
} from './types';
import selector from './selector';
import actions from './actions';

class RegistrationScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formValues: FormValues) {
    const { register } = this.props;
    const { username } = formValues;
    register(username);
  }

  render() {
    const {
      navigation: { goBack },
      isSubmitting,
    }: Props = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.header}>Registration</Text>
        </View>
        <Formik
          onSubmit={this.handleSubmit}
          validationSchema={schema}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            touched,
            errors,
            setFieldTouched,
            isValid,
          }): FormikProps<FormValues> => (
            <View>
              <View style={styles.row}>
                <Input
                  style={styles.input}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={() => setFieldTouched('username')}
                  placeholder="Username"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textAlign="center"
                  editable={!isSubmitting}
                />
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, styles.validationError]}>
                  {touched ? errors.username : ''}
                </Text>
              </View>
              <View style={styles.row}>
                <Button
                  style={styles.button}
                  title="Submit"
                  onPress={handleSubmit}
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                  loadingProps={{ size: 'large', color: 'white' }}
                />
              </View>
            </View>
          )}
        </Formik>

        <Button
          style={styles.row}
          title="Go back"
          onPress={goBack}
        />
      </View>
    );
  }
}

export default connect(
  selector,
  actions,
)(RegistrationScreen);
