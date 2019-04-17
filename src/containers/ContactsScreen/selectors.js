// @flow
import Fuzzy from 'fuse.js';
import { createSelector } from 'reselect';
import { sortBy } from 'lodash';
import {
  filterParamsSelector,
  blockchainContactsSelector,
  localContactsSelector,
} from 'state/contacts/selectors';
import { searchResultsSelector } from 'state/profiles/selectors';

const fuzzyOptions = {
  shouldSort: true,
  threshold: 0.2,
  location: 0,
  distance: 10,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name'],
};

const filterAndSort = (items: Array<any>, filterParams) => {
  let filteredItems = items;
  if (filterParams.isActive) {
    const fuzzy = new Fuzzy(items, fuzzyOptions);
    filteredItems = fuzzy.search(filterParams.query);
  }
  return sortBy(filteredItems, 'name');
};

export default createSelector(
  filterParamsSelector,
  blockchainContactsSelector,
  localContactsSelector,
  searchResultsSelector,
  (filterParams: any, blockchainContacts: Array<any>,
    localContacts: Array<any>, profiles: Array<any>) => {
    let blockchainProfiles;
    if (filterParams.isActive) {
      blockchainProfiles = filterAndSort(profiles, filterParams);
    } else {
      blockchainProfiles = [];
    }
    const contacts = [
      {
        title: 'Blockchain contacts',
        data: filterAndSort(blockchainContacts, filterParams),
      },
      {
        title: 'Blockchain profiles',
        data: blockchainProfiles,
      },
      {
        title: 'Local contacts',
        data: filterAndSort(localContacts, filterParams),
      },
    ].filter(contactList => contactList.data.length);

    return {
      contacts,
      filterParams,
    };
  },
);
