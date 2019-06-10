import { bindActionCreators } from 'redux';
import {
  acceptRequest,
  rejectRequest,
  getPendingRequests,
} from 'state/contacts/actions';

function actions(dispatch) {
  return bindActionCreators(
    {
      getPendingRequests,
      acceptRequest,
      rejectRequest,
    },
    dispatch,
  );
}

export default actions;
