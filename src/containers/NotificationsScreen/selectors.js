/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { createSelector } from 'reselect';
import { selectTransactions } from 'state';
import { selectAllContacts } from 'state';


export default createSelector(
  selectTransactions,
  selectAllContacts,
  (history, contactRequests) => ({
    history: {
      sent: history.filter(h => h.type === 'sent'),
      received: history.filter(h => h.type === 'receive'),
    },
    contactRequests,
  })
);

