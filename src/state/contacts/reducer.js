import { combineReducers } from 'redux';

import {
  CONTACTS_SET_FILTER,
  CONTACTS_CLEAR_FILTER,
  CONTACTS_GET_CONTACTS_ASYNC,
  CONTACTS_ACCEPT_REQUEST_ASYNC,
  CONTACTS_REJECT_REQUEST_ASYNC,
  CONTACTS_GET_PENDING_REQUESTS_ASYNC,
} from 'state/action-types';

const itinialFilterParams = {
  query: '',
  isActive: false,
};

export function filterParams(state = itinialFilterParams, action) {
  let isActive;
  switch (action.type) {
    case CONTACTS_SET_FILTER:
      isActive = itinialFilterParams.query !== action.filterParams.query;
      return {
        ...itinialFilterParams,
        ...action.filterParams,
        isActive,
      };
    case CONTACTS_CLEAR_FILTER:
      return { ...itinialFilterParams };

    default:
      return state;
  }
}

const receivedRequest = (state, action) => {
  const updateStateOnlyForCurrentRequest = (newState) => {
    if (state.address === action.address) {
      return {
        ...state,
        timestamp: new Date(),
        ...newState,
      };
    }
    return state;
  };
  switch (action.type) {
    case CONTACTS_ACCEPT_REQUEST_ASYNC.SUCCESS:
      // This will be fixed with the redux schema. type vs status.
      return updateStateOnlyForCurrentRequest({
        type: 'accepted',
        status: 'ACCEPTED',
      });
    case CONTACTS_REJECT_REQUEST_ASYNC.SUCCESS:
      return updateStateOnlyForCurrentRequest({
        type: 'rejected',
        status: 'REJECTED',
      });

    default:
      return state;
  }
};

const profileMapper = ({ $meta: { userId }, buser: { username }, avatarUrl }) => ({
  userId,
  // username: '', // TODO: put bUser username here
  username,
  avatarUrl,
});

const contactRequestMapper = data => ({
  ...profileMapper(data),
  timestamp: new Date(), // We cannot get timestamp from DAPI yet
  status: 'PENDING', // This will be fixed with the redux schema
});

const pendingRequests = (state = { received: [], sent: [] }, action) => {
  switch (action.type) {
    case CONTACTS_GET_PENDING_REQUESTS_ASYNC.SUCCESS:
      return {
        ...state,
        type: 'pending',
        received: action.response.received.map(({ sender }) => contactRequestMapper(sender)),
        sent: action.response.sent.map(({ receiver }) => contactRequestMapper(receiver)),
      };
    case CONTACTS_ACCEPT_REQUEST_ASYNC.SUCCESS:
      return {
        ...state,
        received: state.received.map(request => receivedRequest(request, action)),
      };
    case CONTACTS_REJECT_REQUEST_ASYNC.SUCCESS:
      return {
        ...state,
        received: state.received.filter(request => request.address !== action.contact),
      };

    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case CONTACTS_GET_CONTACTS_ASYNC.SUCCESS:
      return action.response.map(profileMapper);
    default:
      return state;
  }
};

export default combineReducers({
  pendingRequests,
  items,
  filterParams,
});
