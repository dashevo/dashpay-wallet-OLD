/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { createStore } from 'redux';
import reducers from './reducers';

export * from './language';

export default createStore(reducers);

export { default as getInitialState } from './actions';
