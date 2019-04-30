/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { StoreProvider } from 'containers';
import { LanguageProvider } from 'containers';
import { ThemeProvider } from 'hooks/Theme';
import { Navigator } from 'navigations';
import translations from 'translations';
import themes from 'themes';
import state from 'state';

function App(props) {
  return (
    <StoreProvider store={state}>
      <LanguageProvider translations={translations}>
        <ThemeProvider themes={themes}>
          <Navigator {...props} />
        </ThemeProvider>
      </LanguageProvider>
    </StoreProvider>
  );
}

export default App;
