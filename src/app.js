/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import 'intl'; // TEMP: polyfill
import 'intl/locale-data/jsonp/en';
import React from 'react';
import { StoreProvider } from 'containers';
import { LanguageProvider } from 'containers';
import configureStore from 'state';
import translations from 'translations';
import Navigator from 'navigator';

export default function DashPay() {
  // TODO: We have a lot to do here.

  return class Setup extends React.Component {
    render() {
      return (
        <StoreProvider store={configureStore()}>
          <LanguageProvider translations={translations}>
            <Navigator />
          </LanguageProvider>
        </StoreProvider>
      );
    }
  };
}
