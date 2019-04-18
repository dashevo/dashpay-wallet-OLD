// @flow
import { createSelector } from 'reselect';
import { sortBy } from 'lodash';
import {
  filterParamsSelector,
  blockchainContactsSelector,
  localContactsSelector,
} from 'state/contacts/selectors';
import { searchResultsSelector } from 'state/profiles/selectors';

const filterAndSort = (items: Array<any>, filterParams) => {
  let filteredItems = items;
  if (filterParams.isActive) {
    const query = filterParams.query.toLowerCase();
    filteredItems = filteredItems
      .filter(item => item.name.toLowerCase().indexOf(query) >= 0);
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
