/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createSelector } from 'reselect';
import {
  selectSettings,
  selectRate,
  selectBalance
} from 'state';

// TODO: use i18n currency formatter for fiat
function buildAmountParts(balance, minDecimalPlaces, maxDecimalPlaces, precision) {
  let balString = Number.parseFloat(balance).toFixed(maxDecimalPlaces);
  let precisionSlice = Number.parseFloat(balance).toPrecision(precision).length;
  let placesSlice = balString.indexOf('.') + 1 + minDecimalPlaces;
  let slicePoint = Math.max(precisionSlice, placesSlice);
  return {
    amount: {
      part1: balString.slice(0, slicePoint),
      part2: balString.slice(slicePoint)
    }
  };
}

let settingsSelector = createSelector(
  selectSettings, ({ balanceVisible }) => ({ balanceVisible })
);
let balanceSelector = createSelector(
  selectBalance,
  selectRate,
  (balance, rate) => [
    buildAmountParts(balance / 100000000, 0, 8, 4), // Dash
    buildAmountParts(balance / 100000000 * rate, 2, 4, 2) // Fiat
  ]
);

export default (state) => ({
  balanceVisible: settingsSelector(state),
  items: balanceSelector(state)
});
