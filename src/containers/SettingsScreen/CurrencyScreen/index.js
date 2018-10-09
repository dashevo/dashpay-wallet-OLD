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
    const { currentCurrencyCode } = this.props;
    const rates = await getRates();
    const currencyOptions = rates.map(rate => ({
      ...rate,
      key: rate.code,
      selected: rate.code === currentCurrencyCode,
    }));
    this.setState({ currencyOptions })
  }

  handleSelection(currency) {
    const { code, name, rate } = currency;
    const { changeCurrency, navigation, componentId } = this.props;
    changeCurrency({ code, name, rate });
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
