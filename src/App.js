import React from 'react';
import StoreProvider from 'containers/StoreProvider';
import LanguageProvider from 'containers/LanguageProvider';
import ThemeProvider from 'hooks/Theme/Theme';
import Navigator from 'navigations/Navigator';
import translations from 'translations';
import themes from 'themes';
import store from 'state';

import DapiPoll from 'components/DapiPoll';

function App(props) {
  return (
    <StoreProvider store={store}>
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
