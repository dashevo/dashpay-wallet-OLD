/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
'use strict';

import { StackViewTransitionConfigs } from 'react-navigation';
import type { NavigationTransitionProps } from 'react-navigation';
import type { TransitionConfig } from 'react-navigation';

const SlideFromRight = StackViewTransitionConfigs.SlideFromRightIOS;
const SlideFromBottom = StackViewTransitionConfigs.ModalSlideFromBottomIOS;

function transitionConfig(
  transitionProps: NavigationTransitionProps,
  prevTransitionProps: ?NavigationTransitionProps,
  isModal: boolean
): TransitionConfig {
  return isModal ? SlideFromBottom : SlideFromRight;
}

export const config = {
  headerMode: 'none',
  transitionConfig
};
