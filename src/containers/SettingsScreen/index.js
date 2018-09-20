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
    settings,
    changeLocale,
    changeCurrency,
    changeBalanceVisible,
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

  const balanceOptions = [
    { key: true, value: 'Visible'},
    { key: false, value: 'Hidden'}
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.content}>
        <Text style={styles.text}>Language</Text>
        <RadioRow options={localeOptions} currentOption={settings.locale} action={changeLocale} />
        <Text style={styles.text}>Currency</Text>
        <RadioRow options={currencyOptions} currentOption={settings.currency} action={changeCurrency} />
        <Text style={styles.text}>Balance in Navigation Bar</Text>
        <RadioRow options={balanceOptions} currentOption={settings.balanceVisible} action={changeBalanceVisible} />
        <Text style={styles.text}>App State</Text>
        <Text style={styles.debugger}>{JSON.stringify(state, null, '  ')}</Text>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  settings: selectSettings(state),
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: translation => () =>
      dispatch(changeSettings({locale: translation})),
    changeCurrency: currency => () =>
      dispatch(changeSettings({currency: currency})),
    changeBalanceVisible: balanceVisible => () =>
      dispatch(changeSettings({balanceVisible: balanceVisible}))
  }
};

const connectedSettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);

export { connectedSettingsScreen as SettingsScreen };
