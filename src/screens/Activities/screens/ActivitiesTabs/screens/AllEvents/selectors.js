import { createSelector } from 'reselect';
import moment from 'moment';
import {
  receivedRequestsSelector,
  sentRequestsSelector,
} from 'state/contacts/selectors';
import { currentUserSelector } from 'state/account/selectors';

export default createSelector(
  receivedRequestsSelector,
  sentRequestsSelector,
  currentUserSelector,
  (receivedContactRequests, sentContactRequests, currentUser) => {
    const received = receivedContactRequests.map(({
      userId,
      username,
      avatarUrl,
      status,
    }) => ({
      type: 'RECEIVED',

      // We need a unique identifier to use as a key in the list.
      // This may be the transaction ID. This will be fixed with the redux schema.
      id: userId,

      // this is a tmp solution until we are able to use react-intl with hooks.
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),

      status,
      sender: {
        avatarUrl,
        username,
      },
    }));

    const sent = sentContactRequests.map(({
      userId,
      username,
      avatarUrl,
      status,
    }) => ({
      type: 'SENT',

      // We need a unique identifier to use as a key in the list.
      // This may be the transaction ID. This will be fixed with the redux schema.
      id: userId,

      // this is a tmp solution until we are able to use react-intl with hooks.
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),

      status,
      sender: {
        avatarUrl: currentUser.avatarUrl,
        username: currentUser.username,
      },
      receiver: {
        avatarUrl,
        username,
      },
    }));

    let data = received.concat(sent);

    data = data.sort((a, b) => b.timestamp - a.timestamp);

    return {
      data,
    };
  },
);
