/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

export const selectAlternativeCurrency = ({alternativeCurrency}) => ({
  code: alternativeCurrency.code,
  name: alternativeCurrency.name,
  symbol: alternativeCurrency.symbol,
  rate: 79.29 // Tmp
});
