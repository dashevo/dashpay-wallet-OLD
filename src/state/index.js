/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createStore } from 'redux';
import reducers from './reducers';

// Tmp
export * from './language';

// Tmp
const walletLib = {
  doSomething() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('IS DONE');
      }, 2000);
    });
  }
};

import thunk from 'redux-thunk';
import middleware from './middleware';
import { applyMiddleware } from 'redux';

const extraArgument = thunk.withExtraArgument(walletLib);
const enhancedMiddleware = applyMiddleware(middleware, extraArgument);
export default createStore(reducers, enhancedMiddleware);
