/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { createSelector } from 'reselect';
import moment from 'moment';

// Internal dependencies
import { receivedContactRequestsSelector } from 'state/contacts/selectors';
import { sentContactRequestsSelector } from 'state/contacts/selectors';

export default createSelector(
  receivedContactRequestsSelector,
  sentContactRequestsSelector,
  (receivedContactRequests, sentContactRequests) => {
    let data = receivedContactRequests.map(item => ({
      type: 'RECEIVED',

      // We need a unique identifier to use as a key in the list.
      // This may be the transaction ID. This will be fixed with the redux schema.
      id: item.address,

      // this is a tmp solution until we are able to use react-intl with hooks.
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss'),

      status: item.status,
      sender: {
        address: item.address,
        imageURL: item.image,
        displayName: item.name
      }
    }));

    console.log('__sentContactRequests__', sentContactRequests);

    data = data.sort((a, b) => b.timestamp - a.timestamp);

    return {
      data
    };
  }
);
