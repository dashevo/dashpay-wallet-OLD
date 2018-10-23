/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

 import { MAKE_PAYMENT } from 'state/payment/constants';
import { makePayment } from 'state';

describe('payment actions', () => {
  it('should create an action to start a new payment', () => {
    const recipient = 'recipient';
    const amount = 22;
    const expectedAction = {
      recipient,
      amount,
      type: MAKE_PAYMENT,
    };
    expect(makePayment(recipient, amount)).toEqual(expectedAction);
  });
});
