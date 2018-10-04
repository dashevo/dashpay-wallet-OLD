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
import getRates from './getRates';

import type {
  ReactElement,
  State,
  Props,
} from './types';

class SettingsCurrencyScreen extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = { currencyOptions: [] };
  }

  async componentDidMount() {
    const { currentCurrency } = this.props;
    const rates = await getRates();
    const currencyOptions = rates.map(rate => ({
      ...rate,
      key: rate.code,
      selected: rate.code === currentCurrency,
    }));
    this.setState({ currencyOptions })
  }

  handleSelection(currency) {
    const { code, name, rate } = currency;
    const { changeCurrency, componentId } = this.props;
    changeCurrency({ code, name, rate });
    Navigation.pop(componentId);
  }

  renderItem({ name }): ReactElement {
    return (
      <Text>{ name }</Text>
    );
  }

  render(): ReactElement {
    const { currencyOptions } = this.state;
    return (
      <View>
        <SelectableList data={ currencyOptions } renderItem={this.renderItem} onItemPress={this.handleSelection} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentCurrency: selectSettings(state).currency,
});

const mapDispatchToProps = dispatch => {
  return {
    changeCurrency: currency =>
      dispatch(changeSettings({currency: currency})),
  }
};

const connectedSettingsCurrencyScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsCurrencyScreen);

export { connectedSettingsCurrencyScreen as SettingsCurrencyScreen };
