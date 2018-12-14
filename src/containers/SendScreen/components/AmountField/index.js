/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { Field } from 'components';
import { Opacity } from 'components';
import { View } from 'components';
import { CurrencyInput } from 'components';
import defaultProps from './defaults';
import styles from './styles';
import type { Props } from './types';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

import { CURRENCIES } from 'constants';
import { TouchableWithoutFeedback } from 'react-native';

function CurrencyToggler(props: Props) {
  const { currency: currentCurrencyCode } = props;
  const { name: currentCurrencyName } = CURRENCIES[currentCurrencyCode];

  function handlePress(event: Object) {
    const { currencies } = props;
    const countCurrencies = currencies.length;
    const currentIndex = currencies.findIndex(currencyCode => {
      return currencyCode === currentCurrencyCode;
    });
    const nextIndex = (currentIndex + 1) % countCurrencies;
    const nextCurrency = currencies[nextIndex];
    props.onToggle(nextCurrency);
  }

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
      style={styles.touchableWithoutFeedback}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.label}>{currentCurrencyCode}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.label}>{currentCurrencyName}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function AmountField(props: Props): React.Element<any> {
  return (
    <Field {...props}>
      {({ field, form }) => {
        const { currencies } = props;
        const { currency } = form.values;

        const isFocused = form.focused[field.name];
        const toValue = isFocused ? 1 : 0.25;

        function handleToggle(nextCurrency) {
          // 1. Duhet me konvertu vleren
          // 2. Duhet me resetu formen me vlera te reja
          console.log('nextCurrency', nextCurrency);
          form.setFieldTouched('currency');
          form.setFieldValue('currency', nextCurrency);
        }

        return (
          <View style={styles.column}>
            <View style={styles.row}>
              <CurrencyInput
                currency={currency}
                style={styles.input}
                {...field}
              />
            </View>
            <View style={styles.row}>
              <CurrencyToggler
                currencies={currencies}
                currency={currency}
                onToggle={handleToggle}
              />
            </View>
          </View>
        );
      }}
    </Field>
  );
}

AmountField.defaultProps = defaultProps;

export default AmountField;
