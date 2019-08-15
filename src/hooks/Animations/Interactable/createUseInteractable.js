/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import useInteractable from './useInteractable';

function createUseInteractable(config) {
  return (...args) => useInteractable(config(...args));
}

export default createUseInteractable;
