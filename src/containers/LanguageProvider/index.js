// @flow

import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import selector from './selectors';
import type { Props } from './types';

function LanguageProvider({ locale, children, translations }: Props) {
  const messages = translations[locale];
  return (
    <IntlProvider locale={locale} messages={messages}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}

export default connect(selector)(LanguageProvider);
