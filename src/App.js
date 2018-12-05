/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
import * as React from 'react';
import { StoreProvider } from 'containers';
import { LanguageProvider } from 'containers';
import { Navigator } from 'navigations';
import translations from 'translations';
import state from 'state';

function App(props) {
  return (
    <StoreProvider store={state}>
      <LanguageProvider translations={translations}>
        <Navigator {...props} />
      </LanguageProvider>
    </StoreProvider>
  );
}

export default App;
