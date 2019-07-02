import { bindActionCreators } from 'redux';
import {
  setFilter,
  clearFilter,
  getContacts,
} from 'state/contacts/actions';
import { search as searchProfiles } from 'state/profiles/actions';

export default dispatch => bindActionCreators({
  getContacts,
  setFilter,
  clearFilter,
  searchProfiles,
}, dispatch);
