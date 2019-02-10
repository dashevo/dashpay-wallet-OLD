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
    <Field {...props} name={'amount'}>
      {({ input, form }) => {
        const { currencies, values, convertAmount } = form;
        const { amount, currency: currCurrency } = values;

        const isFocused = form.focused[input.name];
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
              <CurrencyInput currency={'usd'} style={styles.input} {...input} />
            </View>
            <View style={styles.row}>
              <CurrencyInput currency={'usd'} style={styles.input} {...input} />
            </View>
          </View>
        );
      }}
    </Field>
  );
}

AmountField.defaultProps = defaultProps;

export default AmountField;
