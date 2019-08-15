/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 */

// External dependencies
import { memo } from 'react';

function PortalRenderer({ component, ...rest }) {
  return component(rest);
}

export default memo(PortalRenderer);
