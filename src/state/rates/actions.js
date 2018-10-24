/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { INITIALIZE_RATE_SERVICE_REQUEST } from "./constants";
import { INITIALIZE_RATE_SERVICE_SUCCESS } from "./constants";
import { INITIALIZE_RATE_SERVICE_FAILURE } from "./constants";

import { GET_DASH_USD_RATE_REQUEST } from "./constants";
import { GET_DASH_USD_RATE_SUCCESS } from "./constants";
import { GET_DASH_USD_RATE_FAILURE } from "./constants";

// Get Dash Btc Rate
export const getDashUsdRate = {
  types: [
    GET_DASH_USD_RATE_REQUEST,
    GET_DASH_USD_RATE_SUCCESS,
    GET_DASH_USD_RATE_FAILURE
  ],
  async asyncTask(state) {
    let response = await fetch(
      "https://api.coinmarketcap.com/v1/ticker/dash/?convert=USD"
    );
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      const dashUsdRate = await response.json();
      return dashUsdRate[0].price_usd;
    }
  }
};

// Initialize Rate Service
export const initializeRateService = () => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        INITIALIZE_RATE_SERVICE_REQUEST,
        INITIALIZE_RATE_SERVICE_SUCCESS,
        INITIALIZE_RATE_SERVICE_FAILURE
      ],
      asyncTask: async state => {
        try {
          // This is a temporary solution.
          setInterval(() => dispatch(getDashUsdRate), 5000);
          return dispatch(getDashUsdRate);
        } catch (err) {
          const { message = "Something went wrong." } = err;
          throw new Error(message);
        }
      }
    });
};
