/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 */

// External dependencies
import React, { memo } from 'react';
import { View } from 'react-native';

// Internal dependencies
import PortalRenderer from './PortalRenderer';
import styles from './styles';

// import { createPortal } from 'react-native/Libraries/Renderer/shims/ReactNative';
// Currently createPortal is not working with React Native Gesture Handler library.
// This is a temporary solution until we are able to implement createPortal.

function PortalRoot({ portals }) {
  return Object.keys(portals).map(key => (
    <View style={styles.absoluteFill} key={key} collapsable={false} pointerEvents="box-none">
      <PortalRenderer component={portals[key]} />
    </View>
  ));
}

export default memo(PortalRoot);
