import { bindActionCreators } from 'redux';
import {
  acceptContactRequest,
  rejectContactRequest,
  getPendingContactRequests,
} from 'state/profiles/actions';

const actions = dispatch => bindActionCreators({
  getPendingContactRequests,
  acceptContactRequest,
  rejectContactRequest,
}, dispatch);

export default actions;
