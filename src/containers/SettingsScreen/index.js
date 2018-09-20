/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { RadioRow } from './RadioRow';

import translations from 'translations';

import styles from './styles';

import { selectSettings } from 'state';
import { changeSettings } from 'state';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

const SettingsScreen = ({
    locale,
    changeLocale,
    currency,
    changeCurrency,
    state
  }: Props): ReactElement => {
  const localeOptions = Object.keys(translations).map(
    translation => ({
      key: translation,
      value: translations[translation].languageName
    })
  );

  const currencyOptions = [
    { key: 'USD', value: 'US Dollar'},
    { key: 'CAD', value: 'Canadian Dollar'},
    { key: 'VEF', value: 'Venezuelan Bolivar'}
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <Text style={styles.text}>Language</Text>
      <RadioRow options={localeOptions} currentOption={locale} action={changeLocale} />
      <Text style={styles.text}>Currency</Text>
      <RadioRow options={currencyOptions} currentOption={currency} action={changeCurrency} />
      <Text style={styles.text}>{JSON.stringify(state)}</Text>
    </View>
  );
}

const mapStateToProps = state => ({
  locale: selectSettings(state).locale,
  currency: selectSettings(state).currency,
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: translation => () =>
      dispatch(changeSettings({locale: translation})),
    changeCurrency: currency => () =>
      dispatch(changeSettings({currency: currency}))
  }
};

const connectedSettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);

export { connectedSettingsScreen as SettingsScreen };
