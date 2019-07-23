// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Formik } from 'formik';
import {
  View,
  Text,
  Input,
} from 'components';
import schema from './schema';
import styles from './styles';
import type {
  FormValues,
  Props,
} from './types';
import selector from './selector';
import actions from './actions';

const RegistrationScreen = ({
  navigation,
  registerBUser,
  registerProfile,
}: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const registerProfileDelayed = profile => new Promise(
    (resolve, reject) => setTimeout(
      () => registerProfile(profile).then(resolve, reject), 2000,
    ),
  );

  const handleSubmitForm = ({ username }: FormValues) => {
    setIsSubmitting(true);
    const avatarUrl = `https://api.adorable.io/avatars/285/${username}.png`;
    const bio = `I am ${username}, my bio is pretty awesome`;
    registerBUser(username)
      .then(() => {
        Alert.alert('BUser registration - success');
        registerProfileDelayed({ avatarUrl, bio, username })
          .then(
            () => Alert.alert('Profile registration - success'),
            error => Alert.alert(`Profile registration error: ${error.message}`),
          );
      },
      error => Alert.alert(`BUser registration error: ${error.message}`))
      .finally(() => setIsSubmitting(false));
  };

  const goHome = () => navigation.reset([NavigationActions.navigate({ routeName: 'HomeScreen' })]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Registration</Text>
      </View>
      <Formik
        onSubmit={handleSubmitForm}
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
        }) => (
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
        title="Go home"
        onPress={goHome}
      />
    </View>
  );
};

export default connect(selector, actions)(RegistrationScreen);
