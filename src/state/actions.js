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
        try {
          await walletLib.initializeWallet({
            mnemonic: state.user.mnemonic,
            network: state.user.network,
            transport: state.user.transport
          });
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
