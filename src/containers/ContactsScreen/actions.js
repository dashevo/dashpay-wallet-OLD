// @flow
import { bindActionCreators } from 'redux';
import {
  setFilter,
  clearFilter,
} from 'state/contacts/actions';
import {
  sendContactRequest,
  getContacts as getBlockchainContacts,
} from 'state/contacts/blockchain/actions';

export default (dispatch: Function): Object => bindActionCreators(
  {
    getBlockchainContacts,
    setFilter,
    clearFilter,
    sendContactRequest,
  },
  dispatch,
);
