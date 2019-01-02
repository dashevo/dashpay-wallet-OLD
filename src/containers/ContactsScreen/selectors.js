/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { sortBy } from 'lodash';
import { take } from 'lodash';

// Internal dependencies
import { getLocalContacts, getBlockchainContacts } from 'state';

function selector(state) {
  let contacts = [];
  const frequentlyTitle = 'Frequently';
  const frequentlyData = take(sortBy(state.contacts.local.items, 'name'), 5);
  contacts.push({ title: frequentlyTitle, data: frequentlyData });

  console.log('_state.contacts.local.items_', take(sortBy(state.contacts.local.items, 'name'), 5));

  const alphabeticallyTitle = 'Alphabetically';
  const alphabeticallyData = sortBy(state.contacts.local.items, 'name');
  contacts.push({ title: alphabeticallyTitle, data: alphabeticallyData });

  const blockchainQuery = state.contacts.blockchain.query;
  const localQuery = state.contacts.local.query;
  const visible = state.contacts.blockchain.visible;

  const isSearching = state.contacts.blockchain.isSearching;

  if (localQuery && localQuery.length) {
    contacts = [];

    let searchResultsData1 = state.contacts.local.queries[localQuery];

    if (searchResultsData1 && searchResultsData1.length) {
      searchResultsData1 = searchResultsData1.map(id => {
        return state.contacts.local.items[id];
      });

      const searchResultsTitle1 = 'Local Search Results';
      contacts.push({ title: searchResultsTitle1, data: searchResultsData1 });
    }

    let searchResultsData2 = state.contacts.blockchain.queries[blockchainQuery];

    if (visible && searchResultsData2 && searchResultsData2.length) {
      searchResultsData2 = searchResultsData2.map(id => {
        return state.contacts.blockchain.items[id];
      });

      const searchResultsTitle2 = 'Blockchain Search Results';
      contacts.push({ title: searchResultsTitle2, data: searchResultsData2 });
    }
  }

  return {
    contacts,
    searchString: localQuery,
    query: localQuery,
    isSearching,
    visible
  };
}

export default selector;
