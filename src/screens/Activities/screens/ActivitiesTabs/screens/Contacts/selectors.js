/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { createSelector } from 'reselect';

// Internal dependencies
import { receivedContactRequestsSelector } from 'state/contacts/selectors';

export default createSelector(
  receivedContactRequestsSelector,
  receivedContactRequests => {
    let data = receivedContactRequests.map(item => ({
      type: 'social',
      timestamp: new Date(),
      sender: {
        address: item.address,
        imageURL: item.image,
        displayName: item.name
      }
    }));

    data = data.sort((a, b) => b.timestamp - a.timestamp);

    return {
      data
    };
  }
);
