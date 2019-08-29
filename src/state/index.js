// External dependencies
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Internal dependencies
import thunkMiddleware from './thunkMiddleware';
import dpaMiddleware from './dpaMiddleware';
import walletLib from './walletLib';
import reducers from './reducers';

const extraArgument = thunk.withExtraArgument(walletLib);
const dpaTaskMiddleware = dpaMiddleware(walletLib);

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, dpaTaskMiddleware, extraArgument),
);

export default store;
