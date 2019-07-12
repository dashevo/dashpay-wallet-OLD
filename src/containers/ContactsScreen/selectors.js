// @flow
import { createSelector } from 'reselect';
import { sortBy } from 'lodash';
import {
  filterParamsSelector,
  contactsSelector,
  receivedRequestsUsernamesSelector,
  sentContactRequestsUsernamesSelector,
} from 'state/contacts/selectors';
import { profileItemsSelector } from 'state/profiles/selectors';
import { currentUserSelector } from 'state/account/selectors';
import type { FilterParams } from 'state/contacts/types';
import { PROFILE_STATE } from 'state/profiles/constants';
import type { Profile } from 'state/profiles/types';
import type { Section } from './types';

const filterAndSort = (
  items: Array<Profile>, filterParams: FilterParams,
): Array<Profile> => {
  let filteredItems = items;
  if (filterParams.isActive) {
    const query = filterParams.query.toLowerCase();
    filteredItems = filteredItems
      .filter(item => item.username.toLowerCase().indexOf(query) >= 0);
  }
  return sortBy(filteredItems, 'username');
};

const filteredAndSortedContactsSelector = createSelector(
  contactsSelector,
  filterParamsSelector,
  (items: Array<Profile>, filterParams: FilterParams) => filterAndSort(items, filterParams)
    .map(contact => ({ ...contact, state: PROFILE_STATE.IS_CONTACT })),
);

const filteredAndSortedContactUsernamesSelector = createSelector(
  filteredAndSortedContactsSelector,
  (contacts: Array<Profile>) => contacts.map(({ username }) => username),
);

const getProfileState = (
  username: string,
  receivedContactRequestsUsernames: Array<string>,
  sentContactRequestsUsernames: Array<string>,
) => {
  if (receivedContactRequestsUsernames.includes(username)) {
    return PROFILE_STATE.REQUEST_RECEIVED;
  }
  if (sentContactRequestsUsernames.includes(username)) {
    return PROFILE_STATE.REQUEST_SENT;
  }
  return PROFILE_STATE.UNKNOWN;
};

const filteredAndSortedProfilesSelector = createSelector(
  currentUserSelector,
  profileItemsSelector,
  filterParamsSelector,
  filteredAndSortedContactUsernamesSelector,
  receivedRequestsUsernamesSelector,
  sentContactRequestsUsernamesSelector,
  (
    currentUser: Profile,
    profiles: Array<Profile>,
    filterParams: FilterParams,
    contactUsernames: Array<string>,
    receivedContactRequestsUsernames: Array<string>,
    sentContactRequestsUsernames: Array<string>,
  ) => {
    if (filterParams.isActive && profiles.length) {
      return filterAndSort(profiles, filterParams)
        .filter(({ username }) => !contactUsernames.includes(username)
          && currentUser.username !== username)
        .map((profile: Profile) => {
          const { username } = profile;
          const state = getProfileState(
            username,
            receivedContactRequestsUsernames,
            sentContactRequestsUsernames,
          );
          return { ...profile, state };
        });
    }
    return [];
  },
);

export default createSelector(
  filteredAndSortedContactsSelector,
  filteredAndSortedProfilesSelector,
  (contacts: Array<Profile>, profiles: Array<any>) => {
    const sections = [
      {
        title: 'Blockchain contacts',
        data: contacts,
      },
      {
        title: 'Blockchain profiles',
        data: profiles,
      },
    ].filter(({ data }: Section) => data.length);
    return { sections };
  },
);
