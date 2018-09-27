/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { navigation } from 'navigation';
import { StoreProvider } from 'containers';
import { LanguageProvider } from 'containers';
import state from 'state';
import translations from 'translations';
import type { ReactComponent } from './types';
import type { ReactElement } from './types';
import {Wallet} from "@dashevo/wallet-lib";

const walletLib = {
  wallet:null,
  account:null,
  async payTo(payType, recipient, amount, isIS=true){
    const txOpts = {
      amount:parseFloat(amount),
      to:recipient,
      isInstantSend:isIS
    };
    console.log(txOpts);
    return walletLib.account.broadcastTransaction(walletLib.account.createTransaction(txOpts), txOpts.isInstantSend);
  },
  initializeWallet(opts) {
    const { network, mnemonic } = opts;
    return new Promise(resolve => {
      walletLib.wallet = new Wallet({
        network,
        mnemonic,
        transport:'Insight'
      });
      walletLib.account = this.wallet.getAccount(0);
      walletLib.account.events.on('ready', () => {
        resolve(true)
      })
    });
  },
  /**
   * When using the walletLib wrapper, we call our method from walletLib.account.
   * This method allow to update the account reference used in the app.
   * @param accountId - A positive numeric value
   */
  changeAccount(accountId=0){
    walletLib.account = this.wallet.getAccount(accountId);
  },
  isAddress(input){
    return input.length===34; //FIXME : This only work for demo purpose but technically wrong
  }
};

function enhance(Component: ReactComponent): ReactComponent {
  return class EnhancedComponent extends React.Component<any> {
    constructor(props) {
      super(props);
      this.navigation = navigation(props);
      this.walletLib = walletLib;
    }

    render(): ReactElement {
      const { componentId, rootTag, ...props } = this.props;
      return (
        <StoreProvider store={state}>
          <LanguageProvider translations={translations}>
            <Component {...props} navigation={this.navigation} walletLib={this.walletLib} />
          </LanguageProvider>
        </StoreProvider>
      );
    }
  };
}

export default enhance;
