import { Wallet } from '@dashevo/wallet-lib'
import { locator } from './ServiceLocator';

const defaultOpts = {
  network: 'testnet',
  transport: 'insight',
};
/**
 * Provide a walletLib stateful singleton using the service locator pattern
 */
class WalletProvider {
  constructor(opts = defaultOpts) {
    if(!locator.getInstance('walletlib')){
      locator.registerInstance('walletlib', this.createInstance());
    }
    this.instance = locator.getInstance('walletlib');
  }
  createInstance(){
    const opts = {
      network: 'testnet',
      transport: 'insight',
    };
    return new Wallet(opts);
  }
  resetInstance(){
    locator.removeInstance('walletlib');
  }
}
export const wallet = new Wallet();
export const account = wallet.getAccount();
export default WalletProvider;
