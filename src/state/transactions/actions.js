/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
export const MAKE_PAYMENT_TRANSACTION_REQUEST =
  "MAKE_PAYMENT_TRANSACTION_REQUEST";

export const MAKE_PAYMENT_TRANSACTION_SUCCESS =
  "MAKE_PAYMENT_TRANSACTION_SUCCESS";

export const MAKE_PAYMENT_TRANSACTION_FAILURE =
  "MAKE_PAYMENT_TRANSACTION_FAILURE";

export const makePaymentTransaction = (type, recipient, amount) => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        MAKE_PAYMENT_TRANSACTION_REQUEST,
        MAKE_PAYMENT_TRANSACTION_SUCCESS,
        MAKE_PAYMENT_TRANSACTION_FAILURE
      ],
      async asyncTask(state) {
        try {
          return walletLib.payTo(type, recipient, amount);
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
