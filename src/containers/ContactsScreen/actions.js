// @flow
import { bindActionCreators } from 'redux';
import {
  setFilter,
  clearFilter,
} from 'state/contacts/actions';
import {
  getContacts as getBlockchainContacts,
} from 'state/contacts/blockchain/actions';
import { searchProfiles } from 'state/profiles/actions';
import { debounce } from 'lodash';

export default dispatch => bindActionCreators({
  getBlockchainContacts,
  setFilter,
  clearFilter,
  searchProfilesDebounced: debounce(searchProfiles, 300),
}, dispatch);
