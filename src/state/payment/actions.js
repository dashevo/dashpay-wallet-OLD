/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { MAKE_PAYMENT } from './constants';
import { PAYMENT_COMPLETED } from './constants';
import { PAYMENT_FAILED } from './constants';

export const makePayment = (recipient, amount) => ({
  type: MAKE_PAYMENT,
  recipient,
  amount,
});
