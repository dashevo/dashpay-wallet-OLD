/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// This file is created to stimulate search functionality and should be deleted
// when we will be able to search for blockchain users.

// External dependencies
import Fuzzy from "fuse.js";

// Internal dependencies
import data from "./data";

const DEFAULTS = {
  shouldSort: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name', 'address']
};

async function search(dashPayDap, searchString) {
  const { received, sent } = await dashPayDap.getPendingContactRequests();
  const data = [...received.map(address => ({ address, state: 'PENDING CONTACT' })),
    sent.map(address => ({ address, state: 'SENT REQUEST' }))];
  const fuzzy = new Fuzzy(data, DEFAULTS);
  return fuzzy.search(searchString);
}

export default search;
