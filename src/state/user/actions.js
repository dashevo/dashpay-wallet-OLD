/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as ActionsTypes from "./constants";

/**
 * @param {string} username - hex string representing user registration data
 * @param {number} [funding] - default funding for the account in duffs. Optional.
 * @return Promise<string> - user id
 */
export const registerUsername = () =>{
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.REGISTER_USERNAME_REQUEST,
        ActionsTypes.REGISTER_USERNAME_SUCCESS,
        ActionsTypes.REGISTER_USERNAME_FAILURE,
      ],
      async asyncTask(state) {
        try {
          const dashpaydap = walletLib.account.getPlugin('DashPayDAP');
          return dashpaydap.registerUsername();
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
