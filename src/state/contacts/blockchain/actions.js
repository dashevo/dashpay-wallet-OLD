/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import { SEARCH_BLOCKCHAIN_CONTACTS_REQUEST } from "state/action-types";
import { SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS } from "state/action-types";
import { SEARCH_BLOCKCHAIN_CONTACTS_FAILURE } from "state/action-types";
import searchApi from "./api";
import defaults from "./defaults";

export function searchBlockchainContacts(query, options = defaults) {
  return function(dispatch, getState, walletLib) {
    return dispatch({
      query,
      types: [
        SEARCH_BLOCKCHAIN_CONTACTS_REQUEST,
        SEARCH_BLOCKCHAIN_CONTACTS_SUCCESS,
        SEARCH_BLOCKCHAIN_CONTACTS_FAILURE
      ],
      async asyncTask(state) {
        try {
          return searchApi(query);
        } catch (error) {
          const { message = "Something went wrong." } = error;
          throw new Error(message);
        }
      }
    });
  };
}
