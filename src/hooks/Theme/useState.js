/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useState } from 'react';

function _useState(props) {
  const [state] = useState(() => ({
    theme: props.theme || 'blue',
    themes: props.themes
  }));

  return state;
}

export default _useState;
