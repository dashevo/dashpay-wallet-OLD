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
import translations from 'translations';
import { changeLocale } from 'state';
import { ThemedButton } from 'components';

import styles from './styles';
import { THEMES } from 'constants';

import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

const SettingsScreen = ({ language, changeLocale }: Props): ReactElement => {
  const buttons = Object.keys(translations).map(
    translation => <ThemedButton
      key={ 'translationButton' + translation }
      title={ translations[translation].languageName }
      onPress={ changeLocale(translation) }
      theme={ language === translation ? THEMES.light : THEMES.vivid }
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <Text style={styles.text}>Language</Text>
      <View style={styles.buttonRow}>{ buttons }</View>
    </View>
  );
}

const mapStateToProps = state => ({
  language: state.language
});

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: translation => () => dispatch(changeLocale(translation))
  }
};

const connectedSettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);

export { connectedSettingsScreen as SettingsScreen };
