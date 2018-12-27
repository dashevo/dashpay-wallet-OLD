/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { Field } from 'components';
import { View } from 'components';
import { CurrencyInput } from 'components';
import { CurrencyToggler } from './components';
import defaultProps from './defaults';
import styles from './styles';
import type { Props } from './types';

function AmountField(props: Props): React.Element<any> {
  return (
    <Field {...props}>
      {({ field, form }) => {
        const { currencies, values, convertAmount } = form;
        const { amount, currency: currCurrency } = values;

        const isFocused = form.focused[field.name];
        const toValue = isFocused ? 1 : 0.25;

        function handleToggle(nextCurrency) {
          const nextAmount = convertAmount(amount, currCurrency, nextCurrency);
          form.setValues({
            ...values,
            amount: nextAmount,
            currency: nextCurrency
          });
        }

        return (
          <View style={styles.column}>
            <View style={styles.row}>
              <CurrencyInput
                currency={currCurrency}
                style={styles.input}
                {...field}
              />
            </View>
            <View style={styles.row}>
              <CurrencyToggler
                currencies={currencies}
                currency={currCurrency}
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
