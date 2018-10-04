/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { SelectableList } from 'components';

import translations from 'translations';

import styles from './styles';

import { selectSettings, changeSettings } from 'state';

import type {
  ReactElement,
  State,
  Props,
} from './types';

const SettingsLanguageScreen = ({ currentLocale, changeLocale, componentId }: Props): ReactElement => {
  const localeOptions = Object.keys(translations).map(
    localeCode => ({
      key: localeCode,
      languageName: translations[localeCode].languageName,
      selected: localeCode == currentLocale,
    })
  );

  const handleSelection = ({ key }) => {
    changeLocale(key);
    Navigation.pop(componentId);
  }

  const renderItem = ({ languageName }) => (
    <Text>{ languageName }</Text>
  );

  return (
    <View>
      <SelectableList data={ localeOptions } renderItem={renderItem} onItemPress={handleSelection} />
    </View>
  );
}

const mapStateToProps = state => ({
  currentLocale: selectSettings(state).locale,
});

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: locale => dispatch(changeSettings({ locale })),
  }
};

const connectedSettingsLanguageScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsLanguageScreen);

export { connectedSettingsLanguageScreen as SettingsLanguageScreen };
