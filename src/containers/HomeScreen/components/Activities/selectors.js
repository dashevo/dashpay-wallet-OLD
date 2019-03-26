/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

function mapStateToProps(state, props) {
  let transactions = [...state.contacts.blockchain.requests];

  return {
    transactions
  };
}

export default mapStateToProps;
