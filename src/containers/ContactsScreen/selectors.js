// @flow
import { createSelector } from 'reselect';
import { sortBy } from 'lodash';
import {
  filterParamsSelector,
  blockchainContactsSelector,
  localContactsSelector,
  receivedContactRequestsUsernamesSelector,
  sentContactRequestsUsernamesSelector,
} from 'state/contacts/selectors';
import { searchResultsSelector } from 'state/profiles/selectors';
import {
  PENDING_CONTACT_REQUEST,
  SENT_CONTACT_REQUEST,
} from './constants';

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
  receivedContactRequestsUsernamesSelector,
  sentContactRequestsUsernamesSelector,
  (filterParams: any, blockchainContacts: Array<any>,
    localContacts: Array<any>, profiles: Array<any>,
    receivedContactRequestsUsernames: Array<any>,
    sentContactRequestsUsernames: Array<any>) => {
    let blockchainProfiles;
    if (filterParams.isActive && profiles.length) {
      blockchainProfiles = filterAndSort(profiles, filterParams);
      blockchainProfiles.forEach((blockchainProfile) => {
        const profile = blockchainProfile;
        if (receivedContactRequestsUsernames.includes(profile.address)) {
          profile.state = PENDING_CONTACT_REQUEST;
        } else if (sentContactRequestsUsernames.includes(profile.address)) {
          profile.state = SENT_CONTACT_REQUEST;
        }
      });
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
