/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
export const INITIALIZE_WALLET_REQUEST = "INITIALIZE_WALLET_REQUEST";
export const INITIALIZE_WALLET_SUCCESS = "INITIALIZE_WALLET_SUCCESS";
export const INITIALIZE_WALLET_FAILURE = "INITIALIZE_WALLET_FAILURE";

export const initializeWallet = () => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        INITIALIZE_WALLET_REQUEST,
        INITIALIZE_WALLET_SUCCESS,
        INITIALIZE_WALLET_FAILURE
      ],
      async asyncTask(state) {
        const { mnemonic, network, transport } = state.account;
        try {
          await walletLib.initializeWallet({
            mnemonic,
            network,
            transport
          });
          // We need to refactor this.
          walletLib.account.events.on("balance_changed", () => {
            const balance = walletLib.account.getBalance();
            return dispatch({
              type: "RECEIVE_BALANCE",
              response: balance
            });
          });
          const balance = walletLib.account.getBalance();
          return dispatch({
            type: "RECEIVE_BALANCE",
            response: balance
          });
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
