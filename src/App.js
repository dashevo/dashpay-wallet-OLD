/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
'use strict';

import React from 'react';
import { Navigator } from 'navigations';

export class App extends React.Component {
  // TODO: We have a lot to do here.

  render() {
    return <Navigator {...this.props} />;
  }
}

export default App;
