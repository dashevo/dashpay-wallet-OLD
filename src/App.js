import React from 'react';
import { StoreProvider, LanguageProvider } from 'containers';
import { ThemeProvider } from 'hooks/Theme';
import { Navigator } from 'navigations';
import translations from 'translations';
import themes from 'themes';
import state from 'state';

import DapiPoll from 'components/DapiPoll';

function App(props) {
  return (
    <StoreProvider store={state}>
      <DapiPoll />
      <LanguageProvider translations={translations}>
        <ThemeProvider themes={themes}>
          <Navigator {...props} />
        </ThemeProvider>
      </LanguageProvider>
    </StoreProvider>
  );
}

export default App;
