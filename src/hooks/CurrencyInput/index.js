// @flow
import React, { useEffect } from 'react';
import { TextInput } from 'react-native';
import { injectIntl } from 'react-intl';
import { isNaN } from 'lodash';
import formatValue from './formatValue';
import type { Props } from './types';

function CurrencyInput(props: Props) {
  const handleChange = (value: string = '') => {
    const decimal = '.';

    let unformatted = value
      .replace(/\((?=\d+)(.*)\)/, '-$1')
      .replace(new RegExp(`[^0-9-${decimal}]`, 'g'), '')
      .replace(decimal, '.');

    if (unformatted.endsWith(decimal)) return;

    unformatted = parseFloat(unformatted);
    unformatted = !isNaN(unformatted) ? unformatted : '';

    props.onChangeText(unformatted);
  };
  const {
    style,
    i18n,
    value,
    maximumFractionDigits,
    getRef,
  } = props;
  let input;
  useEffect(() => {
    input.setNativeProps({
      text: formatValue(i18n, value, maximumFractionDigits),
    });
  });

  const onSubmit = () => {
    input.blur();
    if (props.onSubmit) {
      props.onSubmit();
    }
  };

  return (
    <TextInput
      {...props}
      keyboardType="numeric"
      style={style}
      returnKeyType="done"
      value={undefined}
      placeholder="0.00"
      onChangeText={handleChange}
      onSubmitEditing={onSubmit}
      ref={(ref) => {
        input = ref;
        if (getRef) {
          getRef(ref);
        }
      }}
    />
  );
}

export default injectIntl(CurrencyInput, { intlPropName: 'i18n' });
