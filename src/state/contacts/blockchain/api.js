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
  keys: ["name"]
};

const fuzzy = new Fuzzy(data, DEFAULTS);
let timeoutId = null;

function search(searchString) {
  return new Promise((resolve, reject) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const res = fuzzy.search(searchString);
      return resolve(res);
    }, 3000);
  });
}

export default search;
