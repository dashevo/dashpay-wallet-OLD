/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 */

// External dependencies
import { createContext } from 'react';

const defaultValue = {
  showPortal: () => console.error('Attempted to call usePortal outside of portal context.'),
  hidePortal: () => console.error('Attempted to call usePortal outside of portal context.'),
};

const PortalContext = createContext(defaultValue);

export const PortalContextProvider = PortalContext.Provider;
export const PortalContextConsumer = PortalContext.Consumer;

export default PortalContext;
