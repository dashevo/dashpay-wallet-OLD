/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 */

// External dependencies
import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';

// Internal dependencies
import { PortalContextProvider } from './PortalContext';
import PortalRoot from './PortalRoot';
import styles from './styles';

const ONCE = [];
const initialState = {};

type Props = {
  children: React.Node,
};

function PortalProvider({ children }: Props) {
  const [portals, setPortals] = useState(initialState);

  const showPortal = useCallback(
    (key, portal) => setPortals(state => ({
      ...state,
      [key]: portal,
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );

  const hidePortal = useCallback(
    key => setPortals((state) => {
      const newPortals = { ...state };
      delete newPortals[key];
      return newPortals;
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );

  const value = useMemo(() => ({ showPortal, hidePortal }), [hidePortal, showPortal]);

  return (
    <PortalContextProvider value={value}>
      <View style={styles.container} collapsable={false}>
        {React.Children.only(children)}
      </View>
      <PortalRoot portals={portals} />
    </PortalContextProvider>
  );
}

export default PortalProvider;
