/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useRef } from 'react';

// Internal dependencies
import Interactable from './Interactable';

function useInteractable(config) {
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = new Interactable(config);
  }
  return ref.current;
}

export default useInteractable;
