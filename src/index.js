/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import App from './App';

export function DashPay() {
  // TODO: We have a lot to do here.

  return class Setup extends React.Component {
    render() {
      const props = {};
      props.store = configureStore();
      return (
        <Provider {...props}>
          <App />
        </Provider>
      );
    }
  };
}
