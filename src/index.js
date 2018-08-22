/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';
import App from './app';

export default function DashPay() {
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
