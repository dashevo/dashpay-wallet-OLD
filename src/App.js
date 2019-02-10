/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
import * as React from 'react';
import { Text } from 'react-native';
import { StoreProvider } from 'containers';
import { LanguageProvider } from 'containers';
import ThemeProvider from 'theme/ThemeProvider';
import { Navigator } from 'navigations';
import translations from 'translations';
import state from 'state';

function App(props) {
  return (
    <StoreProvider store={state}>
      <LanguageProvider translations={translations}>
        <ThemeProvider theme={'light'}>
          <Navigator {...props} />
        </ThemeProvider>
      </LanguageProvider>
    </StoreProvider>
  );
}

export default App;
