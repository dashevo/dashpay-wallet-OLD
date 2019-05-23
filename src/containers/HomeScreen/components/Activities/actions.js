import { bindActionCreators } from 'redux';
import {
  acceptBlockchainContact,
  rejectBlockchainContact,
  getPendingContactRequests,
} from 'state/contacts/blockchain/actions';

function actions(dispatch) {
  return bindActionCreators(
    {
      getPendingContactRequests,
      acceptBlockchainContact,
      rejectBlockchainContact,
    },
    dispatch,
  );
}

export default actions;
