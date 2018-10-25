/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import connect from "react-redux/es/connect/connect";
import {
  View,
  Text,
  Button,
} from 'react-native';
import { SelectableList } from 'components';
import styles from './styles';
import selector from "./selectors";
import actions from "./actions";
import { FIAT_CURRENCIES } from 'constants';

import type {
  ReactElement,
  State,
  Props,
} from './types';

class SettingsCurrencyScreen extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    const { currentCurrencyCode } = props;
    const currencyOptions = FIAT_CURRENCIES.map(({code, name}) => ({
      code,
      key: code,
      name,
      selected: code === currentCurrencyCode,
    }));
    this.state = { currencyOptions };
  }

  async handleSelection(currency) {
    const { code, name } = currency;
    const { changeCurrency, getRate, navigation, componentId } = this.props;
    changeCurrency({ code, name });
    getRate(code);
    navigation.pop(componentId);
  }

  renderItem({ name }): ReactElement {
    return (
      <Text>{ name }</Text>
    );
  }

  render(): ReactElement {
    const { currencyOptions } = this.state;
    return (
      <View style={styles.container}>
        <SelectableList data={ currencyOptions } renderItem={this.renderItem} onItemPress={this.handleSelection} />
      </View>
    );
  }
}

const connectedSettingsCurrencyScreen = connect(
  selector,
  actions,
)(SettingsCurrencyScreen);

export default connectedSettingsCurrencyScreen;
