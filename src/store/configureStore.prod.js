/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { middleware } from 'api';
import reducers from 'reducers';

function configureStore() {
  // TODO: We have more to do here.
  return createStore(reducers, applyMiddleware(thunk, middleware));
}

export default configureStore;
