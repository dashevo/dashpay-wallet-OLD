/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import {
  useCallback, useContext, useEffect, useMemo, useState,
} from 'react';

// Internal dependencies
import PortalContext from './PortalContext';
import { generatePortalKey } from './utilities';

const ONCE = [];

function usePortal(component, inputs = ONCE) {
  const key = useMemo(
    generatePortalKey,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );

  const portal = useMemo(
    () => component,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    inputs,
  );

  const context = useContext(PortalContext);
  const [isShown, setShown] = useState(false);

  const showPortal = useCallback(
    () => setShown(true),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );

  const hidePortal = useCallback(
    () => setShown(false),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );

  useEffect(() => {
    if (isShown) {
      context.showPortal(key, portal);
    } else {
      context.hidePortal(key);
    }

    return () => context.hidePortal(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShown]);

  return [showPortal, hidePortal];
}

export default usePortal;
