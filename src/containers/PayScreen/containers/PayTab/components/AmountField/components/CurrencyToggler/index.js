/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { flagUrl } from 'libraries/flags';
import { CURRENCIES } from 'constants';
import { TouchableWithoutFeedback } from 'components';
import { View } from 'components';
import { Image } from 'components';
import { Text } from 'components';
import styles from './styles';

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

  const flags = props.currencies.map(currencyCode => {
    const isActive = currencyCode === currentCurrencyCode;
    return (
      <View
        style={isActive ? styles.flagActive : styles.flag}
        key={currencyCode}>
        <Image style={styles.image} source={flagUrl(currencyCode)} />
      </View>
    );
  });

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
      style={styles.touchableWithoutFeedback}>
      <View style={styles.row}>
        <View style={styles.left}>{flags}</View>
        <View style={styles.body}>
          <Text style={styles.label}>{currentCurrencyName}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CurrencyToggler;
