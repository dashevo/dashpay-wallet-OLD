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
  initializeWallet(opts) {
    const { network, mnemonic } = opts;
    return new Promise(resolve => {
      walletLib.wallet = new Wallet({
        network,
        mnemonic
      });
      walletLib.account = this.wallet.getAccount(0);
      walletLib.account.events.on('ready', () => {
        resolve(true)
      })
    });
  }
};

function enhance(Component: ReactComponent): ReactComponent {
  return class EnhancedComponent extends React.Component<any> {
    constructor(props) {
      super(props);
      this.navigation = navigation(props);
      if(!walletLib.wallet){
        this.walletLib = walletLib.initializeWallet();
      }
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
