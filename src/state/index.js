import thunk from 'redux-thunk';
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { Wallet } from '@dashevo/wallet-lib';
import DAPIClient from '@dashevo/dapi-client';
import DashPayDPA from '@dashevo/dashpay-dpa';
import reducer from './reducer';
import middleware from './middleware';

// Tmp
const seeds = [
  '18.237.69.61',
  '18.236.234.255',
  '34.222.93.218',
].map(ip => ({ service: `${ip}:3000` }));
const transport = new DAPIClient({
  seeds,
  timeout: 10000,
  retries: 5,
});
const walletLib = {
  wallet: null,
  account: null,
  initializeWallet: (opts) => {
    const { mnemonic, username, network } = opts;
    const accountId = opts.accountId || 0;

    return new Promise((resolve) => {
      const dpd = new DashPayDPA({ username });

      walletLib.wallet = new Wallet({
        network,
        mnemonic,
        plugins: [dpd],
        allowSensitiveOperations: true,
        transport,
      });

      walletLib.account = walletLib.wallet.getAccount({ index: accountId });
      walletLib.account.events.on('ready', () => {
        walletLib.account.dashPayDpa = walletLib.account.getDPA('dashpaydpa');
        resolve(true);
      });
    });
  },
};

// the following code should be splitted into two files:
// configureStore.prod.js should be without createLogger.
const extraArgument = thunk.withExtraArgument(walletLib);
const enhancedMiddleware = applyMiddleware(
  middleware,
  extraArgument,
);
let composeEnhancers = compose;
/* eslint-disable */
if (__DEV__ && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
/* eslint-enable */
const enhancer = composeEnhancers(enhancedMiddleware);
const store = createStore(reducer, enhancer);
export default store;
