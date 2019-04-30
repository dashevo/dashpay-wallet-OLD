/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';

// Internal dependencies
import ThemeProvider from './ThemeProvider';
import useState from './useState';

function Theme(props) {
  const state = useState(props);

  return (
    <ThemeProvider value={state}>
      {React.Children.only(props.children)}
    </ThemeProvider>
  );
}

export default Theme;
