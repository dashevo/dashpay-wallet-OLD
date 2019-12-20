import { Wallet } from '@dashevo/wallet-lib';
import DashPayDPA from '@dashevo/dashpay-dpa';
import DAPIClient from '@dashevo/dapi-client';

const transport = new DAPIClient({
  timeout: 10000,
  retries: 5,
  seeds: [
    { service: '18.237.69.61:3000' },
    { service: '18.236.234.255:3000' },
    { service: '34.222.93.218:3000' },
  ],
});

const walletLib = {
  wallet: null,
  account: null,
  initialize: (opts) => {
    delete this.wallet;
    delete this.account;
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
        resolve(true);
      });
    });
  },
};

export default walletLib;
