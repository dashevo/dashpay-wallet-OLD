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
    const received = receivedContactRequests.map(item => ({
      type: 'RECEIVED',

      // We need a unique identifier to use as a key in the list.
      // This may be the transaction ID. This will be fixed with the redux schema.
      id: item.address,

      // this is a tmp solution until we are able to use react-intl with hooks.
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),

      status: item.status,
      sender: {
        address: item.address,
        imageURL: item.image,
        displayName: item.name,
      },
    }));

    const sent = sentContactRequests.map(item => ({
      type: 'SENT',

      // We need a unique identifier to use as a key in the list.
      // This may be the transaction ID. This will be fixed with the redux schema.
      id: item.address,

      // this is a tmp solution until we are able to use react-intl with hooks.
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),

      status: item.status,
      sender: {
        address: currentUser.address,
        imageURL: currentUser.image,
        displayName: currentUser.username,
      },
      receiver: {
        address: item.address,
        imageURL: item.image,
        displayName: item.name,
      },
    }));

    let data = received.concat(sent);

    data = data.sort((a, b) => b.timestamp - a.timestamp);

    return {
      data,
    };
  },
);
